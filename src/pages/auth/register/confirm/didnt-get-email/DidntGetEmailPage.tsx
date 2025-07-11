import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { useForm } from "react-hook-form";

import {
  ConfirmEmailSchema,
  type ConfirmEmailSchemaType,
} from "@/entities/auth/schemas/confirm-email.schema";
import { Button, Input, LoadingCircle } from "@/shared/ui";

import classes from "./style.module.scss";

const DidntGetEmailPage = () => {
  const {
    register,
    formState: { errors, isSubmitSuccessful, isSubmitting },
    handleSubmit,
  } = useForm<ConfirmEmailSchemaType>({ resolver: zodResolver(ConfirmEmailSchema) });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };
  return (
    <div className={classes.container}>
      <h2 className="large-header-text">Мне не пришло письмо</h2>
      <p className={clsx("small-sub-text", classes.subtitle)}>
        Письмо может прийти с задержкой в 5-10 минут.
        <br />
        Также проверьте разные папки почтового ящика (актуально для gmail.com) и папку "Спам".Если
        письмо все же не пришло, повторите попытку или напишите об этом в тех.поддержку
        <span> support@livedune.ru</span> и мы активируем ваш аккаунт.
      </p>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input registration={register("email")} placeholder="Email" fullWidth type="email" />
          {errors.email && <p className="error-text">{errors.email.message}</p>}
        </div>
        <Button disabled={isSubmitSuccessful} variant="fill" type="submit" className={classes.btn}>
          {isSubmitSuccessful ? (
            "Письмо отправленно"
          ) : (
            <>{isSubmitting && <LoadingCircle />}Отправить</>
          )}
        </Button>
      </form>
      <Button variant="ghost" link="/auth/login">
        Отмена
      </Button>
    </div>
  );
};

export default DidntGetEmailPage;
