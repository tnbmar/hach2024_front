"use client";

import { http, createConfig } from "wagmi";
import { sepolia } from "wagmi/chains";
import { WagmiProvider as WagmiProviderConfigurated } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createWeb3Modal } from "@web3modal/wagmi";

export const config = createConfig({
  chains: [sepolia],
  transports: {
    [sepolia.id]: http(),
  },
});

const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

createWeb3Modal({
  wagmiConfig: config,
  projectId: "1effc4f9fd017d11f394606d6103bfff",
  enableOnramp: true, // Optional - false as default,
  defaultChain: sepolia,
});

const queryClient = new QueryClient();

const WagmiProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProviderConfigurated config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProviderConfigurated>
  );
};

export default WagmiProvider;
