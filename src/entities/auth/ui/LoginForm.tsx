import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { Button, Input, LoadingCircle } from "@/shared/ui";
import type { AppDispatch, RootState } from "@/utils/store";
import { loginUser } from "@/utils/store/slices/thunks";

import { LoginSchema, type LoginSchemaType } from "../schemas/login.schema";
import classes from "./style.module.scss";

const LoginForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { currentUser, error } = useSelector((state: RootState) => state.users);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchemaType>({ resolver: zodResolver(LoginSchema) });

  const onSumbit = async (data: LoginSchemaType) => {
    await dispatch(loginUser(data));
    if (currentUser) {
      window.location.href = "https://livedune.com/ru";
    }
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSumbit)}>
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
      {error && <p className="error-text">{error}</p>}
      <Button className={classes.btn} type="submit" variant="fill">
        {isSubmitting && <LoadingCircle />}
        Войти в аккаунт
      </Button>
      <Button variant="empty" link="/auth/forgot-password">
        Забыли пароль?
      </Button>
    </form>
  );
};

export default LoginForm;
