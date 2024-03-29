"use client";

import Image from "next/image";
import S from "./Header.module.scss";
import LogoutButton from "../LogoutButton";
import { useUserStore } from "@/stores/user";

const Header = () => {
  const { stats, user } = useUserStore(({ stats, user }) => ({ user, stats }));

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
          <span className={S.nickname}>{user?.username}</span>
          <span className={S.idLabel}>id {user?.id}</span>
          {/* @ts-ignore */}
          <w3m-button />
        </div>
      </div>
      <div className={S.rightWrapper}>
        <div className={S.attrColumn}>
          <span className={S.attrColumnLabel}>Рейтинг</span>
          <span className={S.attrColumnValue}>{stats?.rating_percent ?? 0}</span>
        </div>

        <div className={S.attrColumn}>
          <span className={S.attrColumnLabel}>Игры</span>
          <span className={S.attrColumnValue}>{stats?.match_count ?? 0}</span>
        </div>

        <div className={S.attrColumn}>
          <span className={S.attrColumnLabel}>Победы</span>
          <span className={S.attrColumnValue}>{stats?.win_count ?? 0}</span>
        </div>

        <LogoutButton />
      </div>
    </header>
  );
};

export default Header;
