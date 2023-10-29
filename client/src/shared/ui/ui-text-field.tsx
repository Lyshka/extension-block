import { InputHTMLAttributes, PropsWithRef, useId } from "react";
import clsx from "clsx";

export type UiTextFieldProps = {
  className?: string;
  label?: string;
  error?: string;
  inputProps?: PropsWithRef<InputHTMLAttributes<HTMLInputElement>>;
};

const UiTextField = ({
  className,
  error,
  label,
  inputProps,
}: UiTextFieldProps) => {
  const id = useId();

  return (
    <div className={clsx(className, "flex flex-col gap-1")}>
      {label && (
        <label htmlFor={id} className="block">
          {label}
        </label>
      )}

      <input
        {...inputProps}
        id={id}
        className={clsx(
          inputProps?.className,
          "rounded border border-slate-300 focus:border-teal-600 px-2 h-10 outline-none",
        )}
      />

      {error && <p className="text-sm text-rose-400">{error}</p>}
    </div>
  );
};

export default UiTextField;
