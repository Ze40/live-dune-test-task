import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button, Input } from "@/shared/ui";

import { LoginSchema, type LoginSchemaType } from "../schemas/login.schema";
import classes from "./style.module.scss";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({ resolver: zodResolver(LoginSchema) });
  return (
    <form className={classes.form} onSubmit={handleSubmit((data) => console.log(data))}>
      <div>
        <Input
          registration={register("email")}
          placeholder="Email"
          fullWidth
          type="email"
          error={!!errors.email}
        />
        {errors.email && <p className="error-text">{errors.email.message}</p>}
      </div>
      <div>
        <Input
          registration={register("password")}
          placeholder="Пароль"
          fullWidth
          type="password"
          error={!!errors.password}
        />
        {errors.password && <p className="error-text">{errors.password.message}</p>}
      </div>
      <Button className={classes.btn} type="submit" variant="fill">
        Войти в аккаунт
      </Button>
      <Button variant="empty" link="/auth/forgot-password">
        Забыли пароль?
      </Button>
    </form>
  );
};

export default LoginForm;
