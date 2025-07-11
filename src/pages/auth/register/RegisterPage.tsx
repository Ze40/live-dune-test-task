import { RegisterForm } from "@/entities";
import { AuthWrapper } from "@/widgets";

import classes from "./style.module.scss";

const RegisterPage = () => {
  return (
    <main className={classes.main}>
      <AuthWrapper type="register">
        <RegisterForm />
      </AuthWrapper>
    </main>
  );
};

export default RegisterPage;
