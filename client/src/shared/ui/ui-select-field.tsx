import { SelectHTMLAttributes, PropsWithRef, useId } from "react";
import clsx from "clsx";

export type UiSelectOption = {
  value: string;
  label: string;
};

export type UiSelectFieldProps = {
  className?: string;
  label?: string;
  error?: string;
  selectProps?: PropsWithRef<SelectHTMLAttributes<HTMLSelectElement>>;
  options?: UiSelectOption[];
};

const UiSelectField = ({
  className,
  error,
  label,
  selectProps,
  options,
}: UiSelectFieldProps) => {
  const id = useId();

  return (
    <div className={clsx(className, "flex flex-col gap-1")}>
      {label && (
        <label htmlFor={id} className="block">
          {label}
        </label>
      )}

      <select
        {...selectProps}
        id={id}
        className={clsx(
          selectProps?.className,
          "rounded border border-slate-300 focus:border-teal-600 px-2 h-10 outline-none",
        )}
      >
        {options?.map(({ label, value }, idx) => (
          <option key={idx} value={value}>
            {label}
          </option>
        ))}
      </select>

      {error && <p className="text-sm text-rose-400">{error}</p>}
    </div>
  );
};

export default UiSelectField;
