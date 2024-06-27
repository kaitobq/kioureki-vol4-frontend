import clsx from "clsx";
import { ComponentProps, forwardRef } from "react";

type Option = {
  value: string;
  label: string;
};

interface SelectorProps extends Omit<ComponentProps<"select">, "ref"> {
  options: Option[];
  className?: string;
}

function SelectorComponent(
  { options, className, ...rest }: SelectorProps,
  ref: React.Ref<HTMLSelectElement>
) {
  return (
    <select
      ref={ref}
      className={clsx(
        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-pointer",
        className
      )}
      {...rest}
      defaultValue=""
    >
      <option value="" disabled>
        選択してください
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export const Selector = forwardRef<HTMLSelectElement, SelectorProps>(
  SelectorComponent
);

Selector.displayName = "Selector";
