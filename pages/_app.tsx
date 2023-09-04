import "@/styles/globals.css";
import "@/styles/index.scss";
import type { AppProps } from "next/app";
import { WalletConnectProvider } from "@cityofzion/wallet-connect-sdk-react";

import "@rainbow-me/rainbowkit/styles.css";

import {
  connectorsForWallets,
  darkTheme,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { okxWallet } from "@rainbow-me/rainbowkit/wallets";

const wcOptions = {
  projectId: "227aec8e0ee96f568373902466434e8d", // the ID of your project on Wallet Connect website
  relayUrl: "wss://relay.walletconnect.com", // we are using walletconnect's official relay server
  metadata: {
    name: "NeoCast", // your application name to be displayed on the wallet
    description: "Push Notification Service for the Neo Blockchain.", // description to be shown on the wallet
    url: "https://neocast.blitzcrafthq.com/", // url to be linked on the wallet
    icons: ["https://neocast.blitzcrafthq.com/logo-white.png"], // icon to be shown on the wallet
  },
};

const neonEVM = {
  id: 2970385,
  name: "NeoEVM DevNet",
  network: "NeoEVM DevNet",
  iconUrl: "https://app.neocast.xyz/NEO_512_512.svg",
  iconBackground: "#fff",
  nativeCurrency: {
    decimals: 18,
    name: "NeoEVM GAS",
    symbol: "GAS",
  },
  rpcUrls: {
    public: { http: ["https://evm.ngd.network:32332/"] },
    default: { http: ["https://evm.ngd.network:32332/"] },
  },
  blockExplorers: {
    default: { name: "NeoTrace", url: "https://evm.ngd.network/" },
  },
  testnet: false,
};

export default function App({ Component, pageProps }: AppProps) {
  const { publicClient, chains } = configureChains(
    [neonEVM],
    [publicProvider()]
  );

  const connectors = connectorsForWallets([
    {
      groupName: "Suggested",
      wallets: [
        okxWallet({ projectId: "8ccfad16dd70a8b551386625e0721a7e", chains }),
      ],
    },
  ]);

  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
  });

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <WalletConnectProvider autoManageSession={true} options={wcOptions}>
          <Component {...pageProps} />
        </WalletConnectProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
