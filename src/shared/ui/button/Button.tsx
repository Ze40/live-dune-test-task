import type { ButtonHTMLAttributes, ReactNode } from "react";

import clsx from "clsx";
import { NavLink } from "react-router";

import { revealClasses } from "@/utils/common";

import classes from "./style.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  link?: string;
  children: ReactNode;
  variant?: "fill" | "empty";
  type?: "button" | "submit";
}

const Button = ({
  className,
  link,
  children,
  variant = "fill",
  type = "button",
  ...props
}: ButtonProps) => {
  const [commonClasses, activeClass] = revealClasses(className, "active");
  if (link) {
    return (
      <NavLink
        to={link}
        className={({ isActive }) =>
          clsx(classes[variant], commonClasses, { [activeClass || classes.active]: isActive })
        }
      >
        {children}
      </NavLink>
    );
  }

  return (
    <button type={type} className={clsx(classes[variant], commonClasses)} {...props}>
      {children}
    </button>
  );
};

export default Button;
