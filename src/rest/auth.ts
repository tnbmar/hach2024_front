import { AuthDto, RegDto } from "@/types";
import httpClient from ".";

export const signUp = async (dto: RegDto) => {
  const res = await httpClient({ url: "registration", method: "POST", data: dto });
};

export const signIn = async (dto: AuthDto) => {
  const res = await httpClient({ url: "auth", method: "POST", data: dto });
};
