import clsx from "clsx";
import { useSelector } from "react-redux";

import { Button } from "@/shared/ui";
import type { RootState } from "@/utils/store";

import classes from "./style.module.scss";

const ConfirmEmailPage = () => {
  const currentUser = useSelector((state: RootState) => state.users.currentUser);
  return (
    <div className={classes.container}>
      <h2 className="large-header-text">Подтвердите ваш e-mail</h2>
      <p className={clsx("small-sub-text", classes.subtitle)}>
        {currentUser ? `${currentUser.name}, на` : "На"} ваш E-mail отправлено письмо со ссылкой для
        подтверждения. Перейдите по ней, чтобы активировать вашу учетную запись и получить 7 дней
        бесплатного доступа.
      </p>
      <Button variant="fill" className={classes.btn} link="mailto:">
        Перейти к почте
      </Button>
      <Button variant={"empty"} link="/auth/register/confirm/didnt-get-email">
        Мне не пришло письмо
      </Button>
    </div>
  );
};

export default ConfirmEmailPage;
