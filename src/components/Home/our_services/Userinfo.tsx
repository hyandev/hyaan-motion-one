import classNames from "classnames";
import { type User } from "./Prompt/data/users";
import { twMerge } from "tailwind-merge";
interface NewUser extends Omit<User, "id"> {
  className: string | undefined;
}

const UserInfo = ({
  name,
  role,
  email,
  company,
  verified,
  className,
}: NewUser) => {
  return (
    <div
      className={twMerge(
        "border-neutral-surface/15 min-h-0 min-w-0 flex-[0_0_60%] rounded-sm border bg-[#0d0d0d] p-2",
        "transition-opacity duration-700 ease-in-out will-change-transform",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-3.5">
          <div
            className="bg-charcoal size-7 rounded-full"
            aria-hidden="true"
            style={{
              imageRendering: "pixelated",
              flexShrink: 0,
              backgroundSize: "100% 100%",
              backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 24 24'><path d='M 16.5 7.063 C 16.5 10.258 14.57 13 12 13 C 9.428 13 7.5 10.258 7.5 7.062 C 7.5 3.868 9.16 2 12 2 C 14.84 2 16.5 3.867 16.5 7.063 Z M 4.102 20.142 C 4.487 20.6 6.145 22 12 22 C 17.855 22 19.512 20.6 19.898 20.143 C 19.97 20.054 20.003 19.94 19.988 19.826 C 19.9 18.944 19.106 15 12 15 C 4.894 15 4.1 18.944 4.011 19.826 C 3.996 19.94 4.029 20.054 4.102 20.143 Z' fill='rgb(255, 255, 255)'></path></svg>")`,
              opacity: 0.9,
            }}
          />
          <div className="flex flex-col gap-y-0.5">
            <span className="text-neutral-surface text-xs font-semibold">
              {name}
            </span>
            <span className="text-xss text-white">{role}</span>
          </div>
        </div>
        <span
          className={classNames(
            "text-neutral-surface text-xss bg-charcoal/65 px-2 py-0.5",
            "border-neutral-surface/10 rounded-full border",
          )}
        >
          {verified ? "verified" : "Unverified"}
        </span>
      </div>
      <div className="flex items-center">
        <div className="text-neutral-surface text-xss mt-3 flex w-1/2 flex-col">
          <span>E-mail</span>
          <span>{email}</span>
        </div>
        <div className="text-neutral-surface text-xss mt-3 flex flex-col">
          <span>Combany</span>
          <span>{company}</span>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
