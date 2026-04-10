import {
  createContext,
  forwardRef,
  useContext,
  useId,
  useImperativeHandle,
  useMemo,
  type ReactNode,
  type ComponentPropsWithoutRef,
  type ComponentRef,
} from "react";
import * as checkbox from "@zag-js/checkbox";
import { useMachine, normalizeProps } from "@zag-js/react";
import { Slot } from "@radix-ui/react-slot";
import { omit } from "lodash-es";
import { twMerge } from "tailwind-merge";

// Types

export type ToggleSwitchHandle = ReturnType<typeof checkbox.connect>;

// Context

type ToggleContextValue = {
  api: ToggleSwitchHandle;
};

const ToggleContext = createContext<ToggleContextValue | null>(null);

const useToggleContext = (componentName: string): ToggleContextValue => {
  const ctx = useContext(ToggleContext);
  if (!ctx)
    throw new Error(
      `[ToggleSwitch] <${componentName}> must be used within <ToggleSwitch>`,
    );
  return ctx;
};

// ToggleSwitch.Thumb

export type ThumbProps = ComponentPropsWithoutRef<"div">;

const Thumb = forwardRef<HTMLDivElement, ThumbProps>(
  ({ className, ...props }, ref) => {
    const { api } = useToggleContext("ToggleSwitch.Thumb");
    const restIndicatorProps = omit(api.getIndicatorProps(), [
      "hidden",
      "data-part",
    ]);

    return (
      <div
        ref={ref}
        {...restIndicatorProps}
        {...props}
        data-part="thumb"
        aria-hidden="true"
        className={className}
      />
    );
  },
);
Thumb.displayName = "ToggleSwitch.Thumb";

// ToggleSwitch.Track

export type TrackProps = ComponentPropsWithoutRef<"label"> & {
  children?: ReactNode;
};

const Track = forwardRef<ComponentRef<"label">, TrackProps>(
  ({ className, children, ...props }, ref) => {
    const { api } = useToggleContext("ToggleSwitch.Track");

    return (
      <label ref={ref} {...api.getRootProps()} className={className} {...props}>
        <input {...api.getHiddenInputProps()} className="sr-only" />
        <div {...api.getControlProps()}>{children}</div>
      </label>
    );
  },
);
Track.displayName = "ToggleSwitch.Track";

// ToggleSwitch  (Root)

export type ToggleSwitchProps = {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  name?: string;
  value?: string;
  children?: ReactNode;
  className?: string;
  asChild?: boolean;
};

const ToggleSwitchRoot = forwardRef<ToggleSwitchHandle, ToggleSwitchProps>(
  (
    {
      checked,
      defaultChecked,
      onCheckedChange,
      disabled = false,
      name,
      value,
      children,
      className,
      asChild,
    },
    ref,
  ) => {
    const id = useId();
    const isControlled = checked !== undefined;

    const machineContext = useMemo(
      () => ({
        id,
        ...(isControlled ? { checked } : { defaultChecked }),
        onCheckedChange(details: checkbox.CheckedChangeDetails) {
          onCheckedChange?.(details.checked as boolean);
        },
        disabled,
        name,
        value,
      }),
      [
        id,
        isControlled,
        checked,
        defaultChecked,
        disabled,
        name,
        value,
        onCheckedChange,
      ],
    );

    const service = useMachine(checkbox.machine, machineContext);

    const api = checkbox.connect(service, normalizeProps);

    useImperativeHandle(ref, () => api, [api]);

    const Comp = asChild ? Slot : "div";

    return (
      <ToggleContext.Provider value={{ api }}>
        <Comp className={twMerge("inline-flex", className)}>{children}</Comp>
      </ToggleContext.Provider>
    );
  },
);

ToggleSwitchRoot.displayName = "ToggleSwitch";

// Compound export

export const ToggleSwitch = Object.assign(ToggleSwitchRoot, {
  Track,
  Thumb,
});
