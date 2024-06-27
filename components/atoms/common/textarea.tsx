import clsx from "clsx";
import React, { ComponentProps, forwardRef } from "react";

interface TextAreaProps extends ComponentProps<"textarea"> {
  className?: string;
}

function TextAreaComponent(
  props: TextAreaProps,
  ref: React.Ref<HTMLTextAreaElement>
) {
  const { className, ...rest } = props;
  return (
    <textarea
      ref={ref}
      className={clsx(
        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
        className
      )}
      {...rest}
    />
  );
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  TextAreaComponent
);

TextArea.displayName = "TextArea";
