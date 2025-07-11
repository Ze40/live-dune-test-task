import { useEffect, useState } from "react";

import { Outlet, useLocation } from "react-router";

import { Container } from "@/shared/ui";
import { AuthHeader } from "@/widgets";

import classes from "./style.module.scss";

export const AuthLayout = () => {
  const location = useLocation();
  const [type, setType] = useState<string>("");

  useEffect(() => {
    const urls = location.pathname.split("/");
    const lastUr = urls.at(-1);
    if (lastUr === "register") {
      setType("register");
    } else if (lastUr === "login") {
      setType("login");
    } else if (lastUr === "confirm" || lastUr === "didnt-get-email") {
      setType("confirm");
    } else {
      setType("empty");
    }
  }, [location]);

  return (
    <>
      <AuthHeader type={type} />
      <main className={classes.main}>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};
