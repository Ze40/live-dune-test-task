import { Button } from "@/shared/ui";

import classes from "./style.module.scss";

const SuccsesPage = () => {
  return (
    <div className={classes.page}>
      <img src="/service/letter.png" alt="letter image" className={classes.letter} />
      <div className={classes.inf}>
        <div>
          <h2 className={classes.title}>Письмо отправлено</h2>
          <p className="small-sub-text">
            На указанный вами e-mail было отправлено
            <br />
            письмо для смены пароля
          </p>
        </div>
        <Button variant="fill" link="/auth/login" className={classes.btn}>
          Вернуться на главную
        </Button>
      </div>
    </div>
  );
};

export default SuccsesPage;
