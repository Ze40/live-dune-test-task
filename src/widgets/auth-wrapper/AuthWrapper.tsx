import type { ReactElement } from "react";

import clsx from "clsx";

import { OAuthFacebook, OAuthGoogle } from "@/feat";

import classes from "./style.module.scss";

interface AuthWrapperProps {
  children: ReactElement;
  type: "login" | "register";
}

export const AuthWrapper = ({ children, type }: AuthWrapperProps) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <div>
          <h1 className={clsx("large-header-text", classes.title)}>
            {type === "login" && "Войти"}
            {type === "register" && "Регистрация"}
          </h1>
          <p className="small-sub-text">
            {type === "login" && "Добро пожаловать, рады видеть вас снова 👋"}
            {type === "register" && "Зарегистрируйся и получи доступ к аналитике аккаунтов. "}
          </p>
        </div>
        <div className={classes.oauths}>
          <OAuthFacebook className={classes.oauth} />
          <OAuthGoogle className={classes.oauth} />
        </div>
      </div>
      <p className={"small-sub-text text-center"}>или</p>
      {children}
    </div>
  );
};
