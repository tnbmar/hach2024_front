import S from "./LogoutButton.module.scss";
import LogoutIcon from "icons/logout.svg";

const LogoutButton = () => {
  return (
    <button className={S.logoutButton}>
      <LogoutIcon />
    </button>
  );
};

export default LogoutButton;
