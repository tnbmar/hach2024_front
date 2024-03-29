import { AuthDto, RegDto, ResResponse } from "@/types";
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
