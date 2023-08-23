/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import {
  JSXElementConstructor,
  Key,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useEffect,
  useState,
} from "react";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import { LinkIcon } from "@heroicons/react/24/outline";
import ApplicationLayout from "@/components/Utilities/ApplicationLayout";
import { UrlObject } from "url";

export default function Notifications() {
  const [notifications, setNotifications] = useState<any>([]);

  useEffect(() => {
    axios
      .get(`/api/notifications?walletAddress=${localStorage.walletAddress}`)
      .then(function (response) {
        // handle success
        // console.log(response);
        setNotifications(response.data.notifications);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <>
      <Head>
        <title>
          Notifications - NeoCast | Push Notification Service for the Neo
          Blockchain
        </title>
        <meta
          name="title"
          content="Notifications - NeoCast | Push Notification Service for the Neo Blockchain"
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
          content="Notifications - NeoCast | Push Notification Service for the Neo Blockchain"
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
          content="Notifications - NeoCast | Push Notification Service for the Neo Blockchain"
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

      <ApplicationLayout>
        <div className="max-w-3xl mx-auto">
          <div className="text-2xl font-black leading-7 text-zinc-900">
            Your Notifications
          </div>
          <p className="mt-1 text-sm leading-6 text-zinc-600">
            All your notifications from all your sources, in one place.
          </p>
          <div className="mt-5">
            <ul role="list">
              {notifications.map(
                (
                  notification: {
                    topicData: any;
                    mediaURL: string | undefined;
                    topicLogoURL: string | undefined;
                    topicName:
                      | string
                      | number
                      | boolean
                      | ReactElement<any, string | JSXElementConstructor<any>>
                      | ReactFragment
                      | ReactPortal
                      | PromiseLikeOfReactNode
                      | null
                      | undefined;
                    websiteURL: string | UrlObject;
                    name:
                      | string
                      | number
                      | boolean
                      | ReactElement<any, string | JSXElementConstructor<any>>
                      | ReactFragment
                      | ReactPortal
                      | PromiseLikeOfReactNode
                      | null
                      | undefined;
                    description:
                      | string
                      | number
                      | boolean
                      | ReactElement<any, string | JSXElementConstructor<any>>
                      | ReactFragment
                      | ReactPortal
                      | PromiseLikeOfReactNode
                      | null
                      | undefined;
                  },
                  index: Key | null | undefined
                ) => (
                  <li key={index} className="my-3">
                    <div className="border border-zinc-200 rounded-xl">
                      <div className="flex items-center justify-between px-5 py-2">
                        <div className="flex items-center gap-x-3">
                          <img
                            className="h-8 w-8 flex-none rounded-full bg-zinc-50"
                            src={notification.topicData.logoURL}
                            alt="Channel Logo"
                          />
                          <div className="text-sm font-semibold leading-6 text-zinc-900">
                            {notification.topicData.name}
                          </div>
                        </div>
                        <Link
                          href={notification.topicData.websiteURL}
                          className="text-xs font-semibold text-zinc-500"
                        >
                          View In App
                        </Link>
                      </div>
                      <div className="border-t border-zinc-200 px-5 pt-3 pb-5">
                        <div className="flex items-center gap-x-2 font-bold text-xl text-zinc-900">
                          <span>{notification.name}</span>
                          <LinkIcon className="h-4 w-4" aria-hidden="true" />
                        </div>
                        <div className="mt-5 text-sm text-zinc-700">
                          {notification.description}
                        </div>
                        <div className="mt-5">
                          <img
                            src={notification.mediaURL}
                            className="w-full h-auto rounded-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </ApplicationLayout>
    </>
  );
}
