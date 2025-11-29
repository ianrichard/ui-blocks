import { forwardRef } from "react";
import { TextInput } from "@mantine/core";
import type { ReactNode } from "react";

export interface InputProps {
  label?: ReactNode;
  description?: ReactNode;
  error?: ReactNode;
  placeholder?: string;
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  className?: string;
}

const MantineInput = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      description,
      error,
      placeholder,
      value,
      defaultValue,
      onChange,
      disabled,
      required,
      className,
      ...others
    },
    ref
  ) => {
    return (
      <TextInput
        ref={ref}
        label={label}
        description={description}
        error={error}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        disabled={disabled}
        required={required}
        className={className}
        {...others}
      />
    );
  }
);

MantineInput.displayName = "Block.Input";

export default MantineInput;
