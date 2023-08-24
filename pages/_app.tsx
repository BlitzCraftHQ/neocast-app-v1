import "@/styles/globals.css";
import "@/styles/index.scss";
import type { AppProps } from "next/app";
import { WalletConnectProvider } from "@cityofzion/wallet-connect-sdk-react";

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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WalletConnectProvider autoManageSession={true} options={wcOptions}>
      <Component {...pageProps} />
    </WalletConnectProvider>
  );
}
