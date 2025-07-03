import { Link } from "react-router";

import { Button, Container } from "@/shared/ui";

import classes from "./style.module.scss";

interface HeaderProps {
  type: string;
}

const AuthHeader = ({ type }: HeaderProps) => {
  return (
    <header className={classes.header}>
      <Container className={classes.container}>
        <Link to={"https://livedune.com/ru"}>
          <img src="/logo/logo.svg" alt="Live dune logo" />
        </Link>
        {type === "login" && (
          <div className={classes.nav}>
            <p>У вас нет аккаунта?</p>
            <Button link="/auth/register">Регистрация</Button>
          </div>
        )}
        {type === "register" && (
          <div className={classes.nav}>
            <p>Уже есть аккаунт?</p>
            <Button link="/auth/login">Войти</Button>
          </div>
        )}
      </Container>
    </header>
  );
};

export default AuthHeader;
