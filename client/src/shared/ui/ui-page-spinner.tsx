import clsx from "clsx";
import { UiSpinner } from "./ui-spinner";

const UiPageSpinner = ({ className }: { className?: string }) => {
  return (
    <div
      className={clsx(
        "fixed inset-0 flex justify-center items-center bg-slate-100",
        className,
      )}
    >
      <UiSpinner className="text-teal-600 w-24 h-24" />
    </div>
  );
};

export default UiPageSpinner;
