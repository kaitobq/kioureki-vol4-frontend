import clsx from "clsx";
import { ComponentProps } from "react";

interface CardProps extends ComponentProps<"div"> {
  children: React.ReactNode;
  classname?: string;
}

export function Card({ children, className, ...rest }: CardProps) {
  return (
    <div
      className={clsx(
        className,
        "p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8"
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
