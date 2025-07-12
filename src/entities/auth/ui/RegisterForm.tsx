import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { Button, Input, LoadingCircle } from "@/shared/ui";
import type { AppDispatch, RootState } from "@/utils/store";
import { registerUser } from "@/utils/store/slices/thunks";

import { RegisterSchema, type RegisterSchemaType } from "../schemas/register.schema";
import classes from "./style.module.scss";

const RegisterForm = () => {
  const [hasPromo, setHasPromo] = useState<boolean>(false);

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<RegisterSchemaType>({ resolver: zodResolver(RegisterSchema) });

  const dispatch = useDispatch<AppDispatch>();
  const { error } = useSelector((state: RootState) => state.users);

  const onSubmit = async (data: RegisterSchemaType) => {
    await dispatch(registerUser(data));
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input registration={register("name")} placeholder="Имя" type="text" fullWidth />
        {errors.name && <p className="error-text">{errors.name.message}</p>}
      </div>
      <div>
        <Input registration={register("email")} placeholder="Email" type="email" fullWidth />
        {errors.email && <p className="error-text">{errors.email.message}</p>}
      </div>
      <div>
        <Input registration={register("password")} placeholder="Пароль" type="password" fullWidth />
        {errors.password && <p className="error-text">{errors.password.message}</p>}
      </div>
      {!hasPromo ? (
        <Button onClick={() => setHasPromo(!hasPromo)} variant="empty" className={classes.promo}>
          У меня есть промокод
        </Button>
      ) : (
        <Input registration={register("promo")} placeholder="Промокод" type="text" fullWidth />
      )}
      {error && <p className="error-text">{error}</p>}
      <Button variant="fill" type="submit" className={classes.btn}>
        {isSubmitting && <LoadingCircle />}
        Создать аккаунт
      </Button>
      <p className={classes.ofert}>
        Создавая аккаунт, я согласен с <span>условиями оферты</span>
      </p>
    </form>
  );
};

export default RegisterForm;
