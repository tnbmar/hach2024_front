import Image from "next/image";
import S from "./Header.module.scss";
import LogoutButton from "../LogoutButton";

const Header = () => {
  return (
    <header className={S.headerWrap}>
      <div className={S.leftWrapper}>
        <Image
          className={S.avatar}
          src={"/images/default.webp"}
          alt="username"
          width={80}
          height={80}
        />
        <div className={S.attrsList}>
          <span className={S.nickname}>username</span>
          <span className={S.idLabel}>id 1</span>
          <span className={S.mailValue}>mail@mail.ru</span>
        </div>
      </div>
      <div className={S.rightWrapper}>
        <div className={S.attrColumn}>
          <span className={S.attrColumnLabel}>Рейтинг</span>
          <span className={S.attrColumnValue}>10</span>
        </div>

        <div className={S.attrColumn}>
          <span className={S.attrColumnLabel}>Игры</span>
          <span className={S.attrColumnValue}>5</span>
        </div>

        <div className={S.attrColumn}>
          <span className={S.attrColumnLabel}>Победы</span>
          <span className={S.attrColumnValue}>5</span>
        </div>

        <LogoutButton />
      </div>
    </header>
  );
};

export default Header;
