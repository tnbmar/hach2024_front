import { abi } from "@/assets/contractDto";
import { config } from "@/providers/WagmiProvider";
import { parseEther } from "viem";
import { waitForTransactionReceipt, writeContract } from "wagmi/actions";

type SponsorTournament = {
  amount: string;
  id: number;
};

export const sponsorTournament = async ({ amount, id }: SponsorTournament) => {
  try {
    const res = await writeContract(config, {
      abi,
      address: "0x5E1a290d299e71eB988bAd553742BccE35776E06",

      functionName: "sponsorTournament",
      args: [BigInt(id)],
      value: parseEther(amount),
    });

    const resSponsor = await waitForTransactionReceipt(config, { hash: res });

    return resSponsor;
  } catch (e) {
    console.error(e);
  }
};
