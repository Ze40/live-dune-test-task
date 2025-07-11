import { Link } from "react-router";

import { Button, Container } from "@/shared/ui";
import { useScreenSize } from "@/utils/hooks";

import classes from "./style.module.scss";

interface HeaderProps {
  type: string;
}

const AuthHeader = ({ type }: HeaderProps) => {
  const { width } = useScreenSize();
  return (
    <header className={classes.header}>
      <Container className={classes.container}>
        <Link to={"https://livedune.com/ru"} className={classes.logo}>
          <img src="/logo/logo.svg" alt="Live dune logo" />
        </Link>
        {type === "login" && (
          <div className={classes.nav}>
            {width > 760 && <p>У вас нет аккаунта?</p>}
            <Button link="/auth/register">Регистрация</Button>
          </div>
        )}
        {type === "register" && (
          <div className={classes.nav}>
            {width > 760 && <p>Уже есть аккаунт?</p>}
            <Button link="/auth/login">Войти</Button>
          </div>
        )}
        {type === "confirm" && (
          <Button link="/auth/register" variant="ghost">
            Выйти
          </Button>
        )}
      </Container>
    </header>
  );
};

export default AuthHeader;
