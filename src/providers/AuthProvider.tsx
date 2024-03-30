"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import jsCookie from "js-cookie";
import { COOKIES } from "@/constants/cookies";
import { URLS } from "@/constants/urls";
import { fetchMe, getStats } from "@/rest/auth";
import { useUserStore } from "@/stores/user";
import Loader from "@/ui/Loader";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const setUser = useUserStore((state) => state.setUser);
  const setStats = useUserStore((state) => state.setStats);
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const token = jsCookie.get(COOKIES.TOKEN);

      if (!token && pathname !== "/auth") {
        router.push(URLS.AUTH);
      } else if (token) {
        const { data: me } = await fetchMe();

        setUser(me.user);

        const { data: stats } = await getStats();

        setStats(stats);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) return <Loader />;

  return <>{children}</>;
};

export default AuthProvider;
