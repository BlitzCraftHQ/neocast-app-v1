/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import ApplicationLayout from "@/components/Utilities/ApplicationLayout";
import Link from "next/link";

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
    link: "fakelink",
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
    link: "fakelink",
  },
  {
    name: "Dries Vincent",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis vel voluptates, reiciendis, tempora obcaecati laboriosam corporis, enim rem quisquam earum ratione quasi!",
    role: "Business Relations",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: null,
    link: "fakelink",
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
    link: "fakelink",
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
    link: "fakelink",
  },
  {
    name: "Tom Cook",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis vel voluptates, reiciendis, tempora obcaecati laboriosam corporis, enim rem quisquam earum ratione quasi!",
    role: "Director of Product",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: null,
    link: "fakelink",
  },
];

export default function Inbox() {
  return (
    <>
      <Head>
        <title>
          Inbox - NeoCast | Push Notification Service for the Neo Blockchain
        </title>
        <meta
          name="title"
          content="Inbox - NeoCast | Push Notification Service for the Neo Blockchain"
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
          content="Inbox - NeoCast | Push Notification Service for the Neo Blockchain"
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
          content="Inbox - NeoCast | Push Notification Service for the Neo Blockchain"
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
            Your Inbox
          </div>
          <p className="mt-1 text-sm leading-6 text-zinc-600">
            All your notifications from all your sources, in one place.
          </p>
          <div className="mt-5">
            <ul role="list">
              {people.map((person) => (
                <li key={person.name} className="my-3">
                  <div className="border border-zinc-200 rounded-xl">
                    <div className="flex items-center justify-between px-5 py-2">
                      <div className="flex items-center gap-x-3">
                        <img
                          className="h-8 w-8 flex-none rounded-full bg-zinc-50"
                          src={person.imageUrl}
                          alt="Channel Logo"
                        />
                        <div className="text-sm font-semibold leading-6 text-zinc-900">
                          {person.name}
                        </div>
                      </div>
                      <Link
                        href={person.link}
                        className="text-xs font-semibold text-zinc-500"
                      >
                        View In App
                      </Link>
                    </div>
                    <div className="border-t border-zinc-200 px-5 py-5 text-sm text-zinc-800">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Velit dolores quibusdam nihil provident, fugit iure
                      repellat assumenda ex! Magni atque repellat quia neque qui
                      unde ratione perferendis exercitationem accusantium
                      reprehenderit?
                    </div>
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
