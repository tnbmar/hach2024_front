import { RewardsRest } from "@/types";
import httpClient from ".";

export const getRewards = async (token?: string) => {
  const res = await httpClient<RewardsRest>({
    url: "rewards",
    method: "GET",
    headers: {
      Authorization: token,
    },
  });
  return res;
};
