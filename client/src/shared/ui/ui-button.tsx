import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type UiButtonVariant = "primary" | "secondary" | "outlined";
export type UiButtonProps = {
  variant?: UiButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const UiButton = ({ className, variant = "primary", ...props }: UiButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        className,
        "px-4 h-10 rounded flex gap-2 justify-center items-center",
        {
          primary:
            "text-white bg-teal-500 hover:bg-teal-600 disabled:opacity-50 shadow shadow-teal-500/30 disabled:hover:bg-teal-500",
          secondary: "text-white bg-rose-500 hover:bg-rose-600 disabled:opacity-50 disabled:hover:bg-rose-500 shadow shadow-rose-500/30",
          outlined: "border border-slate-300 hover:border-slate-500 disabled:opacity-50 disabled:hover:border-slate-300",
        }[variant],
      )}
    />
  );
};

export default UiButton;
