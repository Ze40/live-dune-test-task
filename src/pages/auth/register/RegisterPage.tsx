import { RegisterForm } from "@/entities";
import { AuthWrapper } from "@/widgets";

const RegisterPage = () => {
  return (
    <>
      <AuthWrapper type="register">
        <RegisterForm />
      </AuthWrapper>
    </>
  );
};

export default RegisterPage;
