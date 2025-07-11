import { LoginForm } from "@/entities";
import { AuthWrapper } from "@/widgets";

import classes from "./style.module.scss";

const LoginPage = () => {
  return (
    <main className={classes.main}>
      <AuthWrapper type="login">
        <LoginForm />
      </AuthWrapper>
    </main>
  );
};

export default LoginPage;
