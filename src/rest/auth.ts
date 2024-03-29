import { AuthDto, RegDto, ResResponse, Stats, User } from "@/types";
import httpClient from ".";

export const signUp = async (dto: RegDto) => {
  const res = await httpClient<ResResponse>({
    url: "registration",
    method: "POST",
    data: dto,
  });
  return res;
};

export const signIn = async (dto: AuthDto) => {
  const res = await httpClient<ResResponse>({ url: "auth", method: "POST", data: dto });
  return res;
};

export const fetchMe = async () => {
  return await httpClient<{ user: User }>({ url: "/user/me" });
};

export const getStats = async () => {
  return await httpClient<Stats>({ url: "/stats/me" });
};
