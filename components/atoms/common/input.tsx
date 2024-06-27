import clsx from "clsx";
import React, { ComponentProps, forwardRef } from "react";

interface InputProps extends ComponentProps<"input"> {
  className?: string;
}

function InputComponent(props: InputProps, ref: React.Ref<HTMLInputElement>) {
  const { className, ...rest } = props;
  return (
    <input
      ref={ref}
      className={clsx(
        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
        className
      )}
      {...rest}
    />
  );
}

export const Input = forwardRef<HTMLInputElement, InputProps>(InputComponent);

Input.displayName = "Input";
