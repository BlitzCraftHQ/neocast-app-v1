import { Fragment, ReactNode, useEffect, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useWalletConnect } from "@cityofzion/wallet-connect-sdk-react";
import {
  ArrowPathIcon,
  Bars3Icon,
  BellAlertIcon,
  BellIcon,
  ChatBubbleLeftRightIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  Cog6ToothIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import axios from "axios";

const navigation = [
  {
    name: "Topics",
    href: "/topics",
    icon: ChatBubbleOvalLeftEllipsisIcon,
    current: true,
  },
  {
    name: "Notifications",
    href: "/notifications",
    icon: BellAlertIcon,
    current: false,
  },
  {
    name: "Chat (Coming Soon)",
    href: "#",
    icon: ChatBubbleLeftRightIcon,
    current: false,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface Props {
  children?: ReactNode;
}

export default function ApplicationLayout({ children }: Props) {
  const router = useRouter();
  const wcSdk = useWalletConnect();
  const [open, setOpen] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string>("");

  // Check if user is logged in
  useEffect(() => {
    // Check if user is logged in on page load
    if (wcSdk.isConnected()) {
      console.log("user is logged in");
      // console.log(wcSdk.getChainId());
      const address = wcSdk.getAccountAddress();
      if (address) {
        setWalletAddress(address);
        console.log(address);
        if (walletAddress !== "") {
          getUserData();
        }
        console.log("Test");
      }
    } else {
      // router.push("/");
      // await wcSdk.connect("neo3:testnet", ["testInvoke"]);
      console.log("User isn't logged in");
    }
  }, [walletAddress]);

  function getUserData() {
    console.log("Get User Data Function", walletAddress);
    axios
      .get(`/api/users?walletAddress=${walletAddress}`)
      .then(function (response) {
        // handle success
        console.log(response.data.userData);
        if (response.data.userData === null) {
          // Create user
          createUser();
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  function createUser() {
    axios
      .post(`/api/users/create`, {
        walletAddress: walletAddress,
      })
      .then(function (response) {
        // handle success
        console.log(response.data.success);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  async function signOut() {
    await wcSdk.disconnect().then(() => {
      router.push("/");
    });
  }

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-zinc-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-secondary-600 px-6 pb-4">
                    <div className="flex h-16 shrink-0 items-center">
                      <Image
                        className="h-8 w-auto"
                        height={512}
                        width={512}
                        src="/logo-white.png"
                        alt="NeoCast"
                      />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <Link
                                  href={item.href}
                                  className={classNames(
                                    item.href === router.pathname
                                      ? "bg-secondary-700 text-white"
                                      : "text-secondary-200 hover:text-white hover:bg-secondary-700",
                                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                  )}
                                >
                                  <item.icon
                                    className={classNames(
                                      item.href === router.pathname
                                        ? "text-white"
                                        : "text-secondary-200 group-hover:text-white",
                                      "h-6 w-6 shrink-0"
                                    )}
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>

                        <li className="mt-auto">
                          <a
                            href="#"
                            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-secondary-200 hover:bg-secondary-700 hover:text-white"
                          >
                            <Cog6ToothIcon
                              className="h-6 w-6 shrink-0 text-secondary-200 group-hover:text-white"
                              aria-hidden="true"
                            />
                            Settings
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-secondary-600 pb-4">
            <div className="flex h-24 shrink-0 items-center gap-x-4 px-6">
              <Image
                className="h-12 w-auto"
                height={512}
                width={512}
                src="/logo-white.png"
                alt="NeoCast"
              />
              <span className="font-black text-white text-2xl">NeoCast</span>
            </div>

            <nav className="flex flex-1 flex-col">
              <div className="mx-4">
                <Link
                  href="/create-topic"
                  className="block text-center rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 hover:bg-zinc-50"
                >
                  Create Topic
                </Link>
              </div>
              <ul
                role="list"
                className="mt-8 px-6 flex flex-1 flex-col gap-y-7"
              >
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className={classNames(
                            item.href === router.pathname
                              ? "bg-secondary-700/80 text-white"
                              : "text-secondary-200 hover:text-white hover:bg-secondary-700",
                            "flex items-center group gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.href === router.pathname
                                ? "text-white"
                                : "text-secondary-200 group-hover:text-white",
                              "h-8 w-8 shrink-0"
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center justify-end gap-x-4 border-b border-zinc-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-zinc-700 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Separator */}
            <div
              className="h-6 w-px bg-zinc-900/10 lg:hidden"
              aria-hidden="true"
            />

            <div className="flex items-center gap-x-4 lg:gap-x-6 xl:gap-x-2">
              <button
                type="button"
                className="-m-2.5 p-2.5 text-zinc-400 hover:text-zinc-500"
              >
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Separator */}
              <div
                className="hidden lg:block lg:h-6 lg:w-px lg:bg-zinc-900/10"
                aria-hidden="true"
              />

              {/* Network dropdown */}
              <Menu as="div" className="relative">
                <Menu.Button className="-m-1.5 flex items-center p-1.5">
                  <span className="sr-only">Open network menu</span>
                  <Image
                    className="h-12 w-auto"
                    height={512}
                    width={512}
                    src="/NEO_512_512.svg"
                    alt="NEO"
                  />
                  <span className="hidden lg:flex lg:items-center">
                    <span
                      className="ml-4 text-sm font-semibold leading-6 text-zinc-900"
                      aria-hidden="true"
                    >
                      {walletAddress.slice(0, 4)}...
                      {walletAddress.slice(walletAddress.length - 4)}
                    </span>
                    <ChevronDownIcon
                      className="ml-2 h-5 w-5 text-zinc-400"
                      aria-hidden="true"
                    />
                  </span>
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-zinc-900/5 focus:outline-none">
                    <Menu.Item>
                      <Link
                        href={`/profile/${walletAddress}`}
                        className="hover:bg-zinc-50 block px-3 py-1 text-sm leading-6 text-zinc-900"
                      >
                        NEO Testnet
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link
                        href={`/profile/${walletAddress}`}
                        className="hover:bg-zinc-50 block px-3 py-1 text-sm leading-6 text-zinc-900"
                      >
                        NEO Mainnet
                      </Link>
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>

              {/* User menu dropdown */}
              <Menu as="div" className="relative">
                <Menu.Button className="-m-1.5 hidden lg:flex lg:items-center p-1.5">
                  <span
                    className="ml-4 text-sm font-semibold leading-6 text-zinc-900"
                    aria-hidden="true"
                  >
                    {walletAddress.slice(0, 4)}...
                    {walletAddress.slice(walletAddress.length - 4)}
                  </span>
                  <ChevronDownIcon
                    className="ml-2 h-5 w-5 text-zinc-400"
                    aria-hidden="true"
                  />
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-zinc-900/5 focus:outline-none">
                    <Menu.Item>
                      <Link
                        href={`/profile/${walletAddress}`}
                        className="hover:bg-zinc-50 block px-3 py-1 text-sm leading-6 text-zinc-900"
                      >
                        {walletAddress.slice(0, 4)}...
                        {walletAddress.slice(walletAddress.length - 4)}
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <span
                        onClick={() => signOut()}
                        className="cursor-pointer hover:bg-zinc-50 block px-3 py-1 text-sm leading-6 text-zinc-900"
                      >
                        Disconnect
                      </span>
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>

          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8 xl:px-12">{children}</div>
          </main>
        </div>
      </div>

      {/* Account setup modal start */}
      {/* <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-zinc-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                  <div>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary-100">
                      <ArrowPathIcon
                        className="h-6 w-6 text-secondary-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-zinc-900"
                      >
                        Hang In There!
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-zinc-500">
                          Please give us a few seconds while we set your
                          dashboard up.
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root> */}
    </>
  );
}
