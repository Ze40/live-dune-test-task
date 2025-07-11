import { type InputHTMLAttributes, forwardRef } from "react";

import clsx from "clsx";
import type { UseFormRegisterReturn } from "react-hook-form";

import classes from "./style.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: boolean;
  fullWidth?: boolean;
  registration?: Partial<UseFormRegisterReturn>;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error = false, fullWidth = false, registration, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={clsx(
          classes.input,
          {
            [classes.error]: error,
            [classes.fullWidth]: fullWidth,
          },
          className
        )}
        {...registration}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
