import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { useWalletConnect } from "@cityofzion/wallet-connect-sdk-react";
import {
  useConnectModal,
  useAccountModal,
  useChainModal,
} from "@rainbow-me/rainbowkit";
import { useAccount, useDisconnect } from "wagmi";

export default function Index() {
  const wcSdk = useWalletConnect();
  const router = useRouter();
  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();
  const { openChainModal } = useChainModal();
  const {
    address: NeonEVMAddress,
    isConnecting,
    isDisconnected,
  } = useAccount();
  const { disconnect } = useDisconnect();

  useEffect(() => {
    console.log(NeonEVMAddress);
    NeonEVMAddress !== undefined && router.push("/topics");
  }, [NeonEVMAddress]);

  if (isConnecting) return <div>Connecting…</div>;

  async function signIn() {
    if (!wcSdk.isConnected()) {
      await wcSdk.connect("neo3:testnet", []);
      wcSdk.isConnected() && router.push("/topics");
    } else {
      wcSdk.isConnected() && router.push("/topics");
    }
  }

  return (
    <>
      <Head>
        <title>
          NeoCast | Push Notification Service for the Neo Blockchain
        </title>
        <meta
          name="title"
          content="NeoCast | Push Notification Service for the Neo Blockchain"
        />
        <meta
          name="description"
          content="Stay informed and in-the-know with real-time push
          notifications on transactions, smart contracts, and network
          developments. Empower your Neo experience with NeoCast's
          timely alerts, ensuring you never miss a beat on the Neo
          Blockchain."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://neocast.blitzcrafthq.com" />
        <meta
          property="og:title"
          content="NeoCast | Push Notification Service for the Neo Blockchain"
        />
        <meta
          property="og:description"
          content="Stay informed and in-the-know with real-time push
          notifications on transactions, smart contracts, and network
          developments. Empower your Neo experience with NeoCast's
          timely alerts, ensuring you never miss a beat on the Neo
          Blockchain."
        />
        <meta property="og:image" content="/meta-image.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://neocast.blitzcrafthq.com/"
        />
        <meta
          property="twitter:title"
          content="NeoCast | Push Notification Service for the Neo Blockchain"
        />
        <meta
          property="twitter:description"
          content="Stay informed and in-the-know with real-time push
          notifications on transactions, smart contracts, and network
          developments. Empower your Neo experience with NeoCast's
          timely alerts, ensuring you never miss a beat on the Neo
          Blockchain."
        />
        <meta property="twitter:image" content="/meta-image.jpg" />
      </Head>

      <>
        <div className="flex min-h-full flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
          <div className="w-full max-w-sm space-y-10">
            <div>
              <div className="flex items-center justify-center gap-x-3">
                <Image
                  src="/logos/512x512_color.png"
                  className="h-12 w-12"
                  alt="NeoCast"
                  height={512}
                  width={512}
                />
                <div className="text-2xl font-black text-zinc-900">
                  <div>NeoCast</div>
                  <div className="-mt-1 text-xs font-medium text-zinc-600">
                    by BlitzCraft
                  </div>
                </div>
              </div>
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign in using a wallet
              </h2>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => signIn()}
                className="flex w-full justify-center rounded-md bg-[#202b2d] px-3 py-1.5 text-sm font-semibold leading-6 text-[#4cffb3] hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                Neon Wallet
              </button>

              {isDisconnected && (
                <div>
                  {openConnectModal && (
                    <button
                      onClick={openConnectModal}
                      type="button"
                      className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                    >
                      OKX Wallet
                    </button>
                  )}
                </div>
              )}

              {NeonEVMAddress !== null && (
                <div>
                  {openAccountModal && (
                    <button onClick={openAccountModal} type="button">
                      Open Account Modal
                    </button>
                  )}

                  {openChainModal && (
                    <button onClick={openChainModal} type="button">
                      Open Chain Modal
                    </button>
                  )}

                  {!openConnectModal && (
                    <button onClick={() => disconnect()}>Disconnect</button>
                  )}

                  {NeonEVMAddress}
                </div>
              )}
            </div>

            <p className="text-center text-sm leading-6 text-gray-500">
              Not a member?{" "}
              <a
                href="#"
                className="font-semibold text-primary-600 hover:text-primary-500"
              >
                Start a 14-day free trial
              </a>
            </p>
          </div>
        </div>
      </>
    </>
  );
}
