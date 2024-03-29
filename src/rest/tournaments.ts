import { TournamentResList } from "@/types";
import httpClient from ".";

export const getTournaments = async (token?: string) => {
  const res = await httpClient<TournamentResList>({
    url: "tournaments",
    method: "GET",
    headers: {
      Authorization: token,
    },
  });
  return res;
};
