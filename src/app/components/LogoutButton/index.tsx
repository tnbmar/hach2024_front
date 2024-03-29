"use client";

import { useRouter } from "next/navigation";
import S from "./LogoutButton.module.scss";
import LogoutIcon from "icons/logout.svg";
import { URLS } from "@/constants/urls";
import jsCookie from "js-cookie";
import { COOKIES } from "@/constants/cookies";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = () => {
    jsCookie.remove(COOKIES.TOKEN);
    router.push(URLS.AUTH);
  };

  return (
    <button className={S.logoutButton} onClick={handleLogout}>
      <LogoutIcon />
    </button>
  );
};

export default LogoutButton;
