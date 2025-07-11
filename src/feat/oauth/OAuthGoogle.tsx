import clsx from "clsx";

import classes from "./style.module.scss";

interface OAuthGoogleProps {
  className?: string;
}

const OAuthGoogle = ({ className }: OAuthGoogleProps) => {
  return (
    <button type="button" className={clsx(className, classes.btn)}>
      <img src="/service/google-logo.svg" alt="google logo" />
      <p>Войти через Google</p>
    </button>
  );
};

export default OAuthGoogle;
