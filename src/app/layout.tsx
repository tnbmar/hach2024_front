import type { Metadata } from "next";
import { Inter } from "next/font/google";
import WagmiProvider from "@/providers/WagmiProvider";

import "../global.scss";
import AuthProvider from "@/providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UFAHACK_2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WagmiProvider>
          <AuthProvider>{children}</AuthProvider>
        </WagmiProvider>
      </body>
    </html>
  );
}
