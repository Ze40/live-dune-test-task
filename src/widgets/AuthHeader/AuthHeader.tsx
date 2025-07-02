import { Link } from "react-router";

import { Button, Container } from "@/shared/ui";

import classes from "./style.module.scss";

interface HeaderProps {
  type: "register" | "login" | "logout" | "empty";
}

const AuthHeader = ({ type }: HeaderProps) => {
  return (
    <header className={classes.header}>
      <Container className={classes.container}>
        <Link to={"https://livedune.com/ru"}>
          <img src="/logo/logo.svg" alt="Live dune logo" />
        </Link>
        <div className={classes.nav}>
          <p>Уже есть аккаунт?</p>
          <Button link="/reg">Войти</Button>
        </div>
      </Container>
    </header>
  );
};

export default AuthHeader;
