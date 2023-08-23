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
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import ApplicationLayout from "@/components/Utilities/ApplicationLayout";

export default function Channels() {
  const [topics, setTopics] = useState<any>([]);
  const [subscribedTopics, setSubscribedTopics] = useState<any>([]);

  function getTopics() {
    axios
      .get("/api/topics")
      .then(function (response) {
        // handle success
        console.log(response);
        setTopics(response.data.topics);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  useEffect(() => {
    axios
      .get(`/api/users?walletAddress=${localStorage.walletAddress}`)
      .then(function (response) {
        // handle success
        console.log(response.data.userData.subscribedTopics);
        setSubscribedTopics(response.data.userData.subscribedTopics);
        getTopics();
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  function optToggle(id: (_id: any) => void) {
    const opt = subscribedTopics.includes(id) ? "out" : "in";
    axios
      .put("/api/topics/opt", {
        topicID: id,
        walletAddress: localStorage.walletAddress,
        action: opt,
      })
      .then(function (response) {
        console.log(response);
        if (response.data.success) {
          if (opt === "in") {
            setSubscribedTopics([
              ...subscribedTopics, // that contains all the old items
              id,
            ]);
            console.log(subscribedTopics);
          } else {
            let updatedSubscibedTopics = subscribedTopics.filter(
              (topicID: (_id: any) => void) => topicID !== id
            );
            setSubscribedTopics(updatedSubscibedTopics);
            console.log(subscribedTopics);
          }
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <Head>
        <title>
          Topics - NeoCast | Push Notification Service for the Neo Blockchain
        </title>
        <meta
          name="title"
          content="Topics - NeoCast | Push Notification Service for the Neo Blockchain"
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
          content="Topics - NeoCast | Push Notification Service for the Neo Blockchain"
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
          content="Topics - NeoCast | Push Notification Service for the Neo Blockchain"
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
          <div className="relative mt-2 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MagnifyingGlassIcon
                className="h-6 w-6 text-zinc-400"
                aria-hidden="true"
              />
            </div>
            <input
              type="text"
              name="account-number"
              id="account-number"
              className="block w-full rounded-xl border-0 py-3.5 pl-12 text-zinc-900 ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-secondary-600 sm:text-sm font-semibold sm:leading-6"
              placeholder="Search by name or 0xb34r"
            />
          </div>
          <div className="mt-5 text-2xl font-black leading-7 text-zinc-900">
            Popular Topics
          </div>
          <p className="mt-1 text-sm leading-6 text-zinc-600">
            A list of topics that are trending across Neocast right now. See one
            that you like? Opt in and start receiving notifications!
          </p>
          <div className="mt-5">
            <ul role="list" className="divide-y divide-zinc-200">
              {topics.map(
                (
                  topic: {
                    _id(_id: any): void;
                    logoURL: string | undefined;
                    websiteURL: string | undefined;
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
                  <li key={index} className="flex justify-between gap-x-6 py-5">
                    <div className="flex min-w-0 gap-x-4">
                      <img
                        className="h-24 w-24 flex-none rounded-xl bg-zinc-50"
                        src={topic.logoURL}
                        alt="Channel Logo"
                      />
                      <div className="min-w-0 flex-auto">
                        <p className="text-xl font-semibold leading-6 text-zinc-900">
                          {topic.name}
                        </p>
                        <p className="mt-2 truncate text-sm font-medium leading-5 text-zinc-500 max-w-prose whitespace-normal">
                          {topic.description}
                        </p>
                        <div className="mt-5 flex gap-x-5">
                          <Link
                            href={topic.websiteURL || ""}
                            target="_blank"
                            className="inline-flex items-center rounded-full bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600 ring-1 ring-inset ring-zinc-500/10"
                          >
                            {topic.websiteURL}
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end justify-center">
                      <button
                        type="button"
                        onClick={() => optToggle(topic._id)}
                        className="rounded-md bg-secondary-600 px-8 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-600"
                      >
                        {subscribedTopics.includes(topic._id)
                          ? "Opt Out"
                          : "Opt In"}
                      </button>
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
