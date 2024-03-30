import { config } from "@/providers/WagmiProvider";
import { readContract } from "wagmi/actions";
import { abi } from "@/assets/contractDto";
import { formatEther } from "viem";

export const getTurnamentDeposit = async (tournament_id: number) => {
  const [_, deposit] = await readContract(config, {
    abi,
    address: "0x5E1a290d299e71eB988bAd553742BccE35776E06",
    functionName: "getTournamentDetails",
    args: [BigInt(tournament_id)],
  });

  return formatEther(deposit);
};
