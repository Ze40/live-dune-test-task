import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button, Input } from "@/shared/ui";

import { RegisterSchema, type RegisterSchemaType } from "../schemas/register.schema";
import classes from "./style.module.scss";

const RegisterForm = () => {
  const [hasPromo, setHasPromo] = useState<boolean>(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterSchemaType>({ resolver: zodResolver(RegisterSchema) });
  return (
    <form className={classes.form} onSubmit={handleSubmit((data) => console.log(data))}>
      <div>
        <Input registration={register("name")} placeholder="Имя" type="text" fullWidth />
        {errors.name && <p className={classes.error}>{errors.name.message}</p>}
      </div>
      <div>
        <Input registration={register("email")} placeholder="Email" type="email" fullWidth />
        {errors.email && <p className={classes.error}>{errors.email.message}</p>}
      </div>
      <div>
        <Input registration={register("password")} placeholder="Пароль" type="password" fullWidth />
        {errors.password && <p className={classes.error}>{errors.password.message}</p>}
      </div>
      {!hasPromo ? (
        <Button onClick={() => setHasPromo(!hasPromo)} variant="empty" className={classes.promo}>
          У меня есть промокод
        </Button>
      ) : (
        <Input registration={register("promo")} placeholder="Промокод" type="text" fullWidth />
      )}

      <Button variant="fill" type="submit" className={classes.btn}>
        Создать аккаунт
      </Button>
      <p className={classes.ofert}>
        Создавая аккаунт, я согласен с <span>условиями оферты</span>
      </p>
    </form>
  );
};

export default RegisterForm;
