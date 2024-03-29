"use client";

import { redirect, usePathname } from "next/navigation";
import { useEffect } from "react";
import jsCookie from "js-cookie";
import { COOKIES } from "@/constants/cookies";
import { URLS } from "@/constants/urls";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  useEffect(() => {
    const token = jsCookie.get(COOKIES.TOKEN);

    if (!token && pathname !== "/auth") {
      redirect(URLS.AUTH);
    }
  }, []);

  return <>{children}</>;
};

export default AuthProvider;
