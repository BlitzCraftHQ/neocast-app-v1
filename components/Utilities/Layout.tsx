import { ReactNode } from "react";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useWalletConnect } from "@cityofzion/wallet-connect-sdk-react";
import Footer from "@/components/Utilities/Footer";

const navigation = [
  { name: "Home", href: "/#home" },
  { name: "The Problem", href: "/#problem" },
  { name: "Why NeoCast?", href: "/#why" },
  { name: "FAQ", href: "/#faq" },
  { name: "Contact", href: "/#contact" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface Props {
  children?: ReactNode;
}

export default function Layout({ children }: Props) {
  const router = useRouter();
  const wcSdk = useWalletConnect();

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
      <div className="min-h-full">
        <div className="fixed w-full top-0 z-10">
          <Disclosure
            as="nav"
            className="border-b border-secondary-600 border-opacity-25 bg-gradient-to-r from-secondary-900/50 to-primary-900/50 lg:border-none"
          >
            {() => (
              <>
                <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
                  <div className="relative flex h-24 items-center justify-between">
                    <div className="flex items-center px-2 lg:px-0">
                      <div className="flex-shrink-0 flex items-center">
                        <Image
                          className="h-12 w-auto"
                          height={512}
                          width={512}
                          src="/NEO_512_512.svg"
                          alt="NeoCast"
                        />
                        <span className="font-medium text-white text-3xl tracking-wide">
                          neo
                          <span className="ml-1 text-primary-600 uppercase text-2xl tracking-wider">
                            CAST
                          </span>
                        </span>
                      </div>
                      <div className="hidden lg:ml-10 lg:block">
                        <div className="flex space-x-4">
                          {navigation.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                item.href === router.pathname
                                  ? "bg-white text-zinc-900"
                                  : "text-zinc-200 hover:text-zinc-900 hover:bg-zinc-100",
                                "rounded-md py-2 px-3 text-lg font-medium transition-all duration-200 ease-in-out"
                              )}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div>
                      <button
                        onClick={() => signIn()}
                        className="rounded-md bg-white px-3.5 py-2.5 text-lg font-semibold text-zinc-900 ring-1 ring-inset ring-zinc-300 hover:bg-zinc-50"
                      >
                        Launch dApp
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </Disclosure>
        </div>

        <div className="h-24 bg-gradient-to-r from-secondary-900 to-primary-900" />
        <main>{children}</main>

        <Footer />
      </div>
    </>
  );
}
