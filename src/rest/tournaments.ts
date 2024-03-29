import { TournamentReceive, TournamentResList } from "@/types";
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

export const getTournament = async (id: number, Authorization: string) => {
  return await httpClient<TournamentReceive>({
    url: `/tournaments/${id}`,
    headers: { Authorization },
  });
};
