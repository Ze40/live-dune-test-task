import clsx from "clsx";

import classes from "./style.module.scss";

interface OAuthFacebookProps {
  className?: string;
}
const OAuthFacebook = ({ className }: OAuthFacebookProps) => {
  return (
    <button type="button" className={clsx(className, classes.btn)}>
      <img src="/service/facebook-logo.svg" alt="facebook logo" />
      <p>Войти через Facebook</p>
    </button>
  );
};

export default OAuthFacebook;
