import clsx from "clsx";

import { Button } from "@/shared/ui";

import classes from "./style.module.scss";

const ConfirmEmailPage = () => {
  return (
    <div className={classes.container}>
      <h2 className="large-header-text">Подтвердите ваш e-mail</h2>
      <p className={clsx("small-sub-text", classes.subtitle)}>
        {"Игорь"}, на ваш E-mail отправлено письмо со ссылкой для подтверждения. Перейдите по ней,
        чтобы активировать вашу учетную запись и получить 7 дней бесплатного доступа.
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
