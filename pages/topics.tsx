/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import ApplicationLayout from "@/components/Utilities/ApplicationLayout";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const people = [
  {
    name: "Leslie Alexander",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis vel voluptates, reiciendis, tempora obcaecati laboriosam corporis, enim rem quisquam earum ratione quasi!",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Michael Foster",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis vel voluptates, reiciendis, tempora obcaecati laboriosam corporis, enim rem quisquam earum ratione quasi!",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Dries Vincent",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis vel voluptates, reiciendis, tempora obcaecati laboriosam corporis, enim rem quisquam earum ratione quasi!",
    role: "Business Relations",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: null,
  },
  {
    name: "Lindsay Walton",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis vel voluptates, reiciendis, tempora obcaecati laboriosam corporis, enim rem quisquam earum ratione quasi!",
    role: "Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Courtney Henry",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis vel voluptates, reiciendis, tempora obcaecati laboriosam corporis, enim rem quisquam earum ratione quasi!",
    role: "Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Tom Cook",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis vel voluptates, reiciendis, tempora obcaecati laboriosam corporis, enim rem quisquam earum ratione quasi!",
    role: "Director of Product",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: null,
  },
];

export default function Channels() {
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
              {people.map((person) => (
                <li
                  key={person.name}
                  className="flex justify-between gap-x-6 py-5"
                >
                  <div className="flex min-w-0 gap-x-4">
                    <img
                      className="h-24 w-24 flex-none rounded-xl bg-zinc-50"
                      src={person.imageUrl}
                      alt="Channel Logo"
                    />
                    <div className="min-w-0 flex-auto">
                      <p className="text-xl font-semibold leading-6 text-zinc-900">
                        {person.name}
                      </p>
                      <p className="mt-2 truncate text-sm font-medium leading-5 text-zinc-500 max-w-prose whitespace-normal">
                        {person.description}
                      </p>
                      <div className="mt-5 flex gap-x-5">
                        <span className="inline-flex items-center rounded-full bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600 ring-1 ring-inset ring-zinc-500/10">
                          Badge
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end justify-center">
                    <button
                      type="button"
                      className="rounded-md bg-secondary-600 px-8 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-600"
                    >
                      Opt In
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ApplicationLayout>
    </>
  );
}
