import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import {
  ForgotPasswordSchema,
  type ForgotPasswordSchemaType,
} from "@/entities/auth/schemas/forgot-password.schema";
import { Button, Input, LoadingCircle } from "@/shared/ui";

import classes from "./style.module.scss";

const ForgotPasswordPage = () => {
  const {
    register,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    handleSubmit,
  } = useForm<ForgotPasswordSchemaType>({ resolver: zodResolver(ForgotPasswordSchema) });

  const navigate = useNavigate();

  // Имитация запроса
  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    navigate("/auth/forgot-password/succses");
  };

  return (
    <div className={classes.page}>
      <img src="/service/lock.png" alt="lock image" className={classes.lock} />
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <div className="text-center">
          <h2 className={classes.title}>Восстановить пароль</h2>
          <p className="small-sub-text">Введите e-mail, на который регистрировались ранее</p>
        </div>
        <div>
          <Input registration={register("email")} type="text" placeholder="Email" fullWidth />
          {errors.email && <p className="error-text">{errors.email.message}</p>}
        </div>
        <Button disabled={isSubmitSuccessful} variant="fill" type="submit" className={classes.btn}>
          {isSubmitSuccessful ? (
            "Отправленно"
          ) : isSubmitting ? (
            <>
              <LoadingCircle />
              Отправка
            </>
          ) : (
            "Восстановить пароль"
          )}
        </Button>
        <Button variant="ghost" link="/auth/login">
          Отменить
        </Button>
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
