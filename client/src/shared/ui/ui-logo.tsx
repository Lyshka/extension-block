import clsx from "clsx";
import { SVGProps } from "react";

export function UiLogo({ className }: { className?: string }) {
  return (
    <div className={clsx(className, "flex items-center gap-2 text-xl")}>
      <Shield className="w-12 h-12" />
      <span>Easy Block</span>
    </div>
  );
}

export const Shield = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 22q-3.475-.875-5.738-3.988T4 11.1V5l8-3l8 3v6.1q0 3.8-2.263 6.913T12 22Zm-2-6h4q.425 0 .713-.288T15 15v-3q0-.425-.288-.713T14 11v-1q0-.825-.588-1.413T12 8q-.825 0-1.413.588T10 10v1q-.425 0-.713.288T9 12v3q0 .425.288.713T10 16Zm1-5v-1q0-.425.288-.713T12 9q.425 0 .713.288T13 10v1h-2Z"
      ></path>
    </svg>
  );
};
