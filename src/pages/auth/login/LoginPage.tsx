import { AuthWrapper } from "@/widgets";

import classes from "./style.module.scss";

const LoginPage = () => {
  return (
    <main className={classes.main}>
      <AuthWrapper type="login">
        <form action=""></form>
      </AuthWrapper>
    </main>
  );
};

export default LoginPage;
