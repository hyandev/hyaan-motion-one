import * as accordion from "@zag-js/accordion";
import { useMachine, normalizeProps } from "@zag-js/react";
import {
  createContext,
  forwardRef,
  useContext,
  useId,
  useImperativeHandle,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import { Slot } from "@radix-ui/react-slot";

// types
export type AccordionHandle = ReturnType<typeof accordion.connect>;

// Context
type AccordionContextValue = {
  api: AccordionHandle;
};

type AccordionItemContextValue = {
  value: string;
};

const AccordionContext = createContext<AccordionContextValue | null>(null);
const AccordionItemContext = createContext<AccordionItemContextValue | null>(
  null,
);

const useAccordionContext = (componentName: string): AccordionContextValue => {
  const ctx = useContext(AccordionContext);
  if (!ctx)
    throw new Error(
      `[Accordion] <${componentName}> must be used within <AccordionRoot>`,
    );
  return ctx;
};

const useAccordionItemContext = (
  componentName: string,
): AccordionItemContextValue => {
  const ctx = useContext(AccordionItemContext);
  if (!ctx)
    throw new Error(
      `[Accordion] <${componentName}> must be used within <Accordion.Item>`,
    );
  return ctx;
};

// Accordion.Container
export type AccordionContainerProps = ComponentPropsWithoutRef<"div"> & {
  asChild?: boolean;
  value: string;
};

const Item = forwardRef<HTMLDivElement, AccordionContainerProps>(
  ({ children, className, value, asChild, ...props }, ref) => {
    const { api } = useAccordionContext("Accordion.Container");

    const Comp = asChild ? Slot : "div";

    return (
      <AccordionItemContext.Provider value={{ value }}>
        <Comp
          ref={ref}
          {...api.getItemProps({ value })}
          {...props}
          className={className}
        >
          {children}
        </Comp>
      </AccordionItemContext.Provider>
    );
  },
);

Item.displayName = "Accordion.Item";

// Accordion.Trigger
export type AccordionTriggerProps = ComponentPropsWithoutRef<"button"> & {
  asChild?: boolean;
};

const Trigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ children, className, asChild, ...props }, ref) => {
    const { api } = useAccordionContext("Accordion.Trigger");
    const { value } = useAccordionItemContext("Accordion.Trigger");

    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        {...api.getItemTriggerProps({ value })}
        {...props}
        className={className}
      >
        {children}
      </Comp>
    );
  },
);

Trigger.displayName = "Accordion.Trigger";

// Accordion.Content
export type AccordionContentProps = ComponentPropsWithoutRef<"div"> & {
  asChild?: boolean;
};

const Content = forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ children, className, asChild, ...props }, ref) => {
    const { api } = useAccordionContext("Accordion.Content");
    const { value } = useAccordionItemContext("Accordion.Content");

    const Comp = asChild ? Slot : "div";

    return (
      <Comp
        ref={ref}
        {...api.getItemContentProps({ value })}
        {...props}
        className={className}
      >
        {children}
      </Comp>
    );
  },
);

Content.displayName = "Accordion.Content";

// Accordion Root

export type AccordionRootProps = ComponentPropsWithoutRef<"div"> & {
  children?: ReactNode;
  asChild?: boolean;
  defaultValue?: string[];
  multiple?: boolean;
};

const AccordionRoot = forwardRef<AccordionHandle, AccordionRootProps>(
  ({ children, asChild, defaultValue, multiple = false, ...rest }, ref) => {
    const id = useId();

    const service = useMachine(accordion.machine, {
      id,
      multiple,
      ...(defaultValue ? { value: defaultValue } : {}),
    });

    const api = accordion.connect(service, normalizeProps);

    useImperativeHandle(ref, () => api, [api]);

    const Comp = asChild ? Slot : "div";

    return (
      <AccordionContext.Provider value={{ api }}>
        <Comp {...api.getRootProps()} {...rest}>
          {children}
        </Comp>
      </AccordionContext.Provider>
    );
  },
);

AccordionRoot.displayName = "Accordion";

export const Accordion = Object.assign(AccordionRoot, {
  Item,
  Trigger,
  Content,
});
