import clsx from "clsx";
import Link from "next/link";

type UiLinkProps = {} & Parameters<typeof Link>[0];

const UiLink = ({ className, ...props }: UiLinkProps) => {
  return (
    <Link
      {...props}
      className={clsx(
        className,
        "px-1 text-teal-500 hover:text-teal-600",
      )}
    />
  );
};

export default UiLink;
