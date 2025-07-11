import { LoginForm } from "@/entities";
import { AuthWrapper } from "@/widgets";

const LoginPage = () => {
  return (
    <>
      <AuthWrapper type="login">
        <LoginForm />
      </AuthWrapper>
    </>
  );
};

export default LoginPage;
