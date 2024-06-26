"use client";

import { http, createConfig } from "wagmi";
import { sepolia } from "wagmi/chains";
import { WagmiProvider as WagmiProviderConfigurated } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi";
import { walletConnect } from "wagmi/connectors";

// export const config = defaultWagmiConfig({
//   // chains: [sepolia],
//   // transports: {
//   //   [sepolia.id]: http(),
//   // },
//   // connectors: [walletConnect({ projectId: "1effc4f9fd017d11f394606d6103bfff" })],
// });

const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

export const config = defaultWagmiConfig({
  chains: [sepolia],
  projectId: "1effc4f9fd017d11f394606d6103bfff",
  metadata,
  ...{ transports: { [sepolia.id]: http() } }, // Optional - Override createConfig parameters
});

createWeb3Modal({
  wagmiConfig: config,
  projectId: "1effc4f9fd017d11f394606d6103bfff",
  defaultChain: sepolia,
  allWallets: "ONLY_MOBILE",
  metadata,
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
