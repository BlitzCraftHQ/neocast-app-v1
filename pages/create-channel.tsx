import Head from "next/head";
import ApplicationLayout from "@/components/Utilities/ApplicationLayout";
import {
  CheckIcon,
  PhotoIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

const steps = [
  {
    id: "01",
    name: "Job Details",
    description: "Vitae sed mi luctus laoreet.",
    href: "#",
    status: "complete",
  },
  {
    id: "02",
    name: "Application form",
    description: "Cursus semper viverra.",
    href: "#",
    status: "current",
  },
  {
    id: "03",
    name: "Preview",
    description: "Penatibus eu quis ante.",
    href: "#",
    status: "upcoming",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function CreateChannel() {
  return (
    <>
      <Head>
        <title>
          NeoCast | Helping Web3 Companies Make Meaningful Partnerships
        </title>
        <meta
          name="title"
          content="NeoCast | Helping Web3 Companies Make Meaningful Partnerships"
        />
        <meta
          name="description"
          content="NeoCast is an AI-powered platform that effortlessly connects Web3 projects, enabling exponential growth by identifying perfect collaborations."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://neocast.blitzcrafthq.com" />
        <meta
          property="og:title"
          content="NeoCast | Helping Web3 Companies Make Meaningful Partnerships"
        />
        <meta
          property="og:description"
          content="NeoCast is an AI-powered platform that effortlessly connects Web3 projects, enabling exponential growth by identifying perfect collaborations."
        />
        <meta property="og:image" content="/meta-image.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://neocast.blitzcrafthq.com/"
        />
        <meta
          property="twitter:title"
          content="NeoCast | Helping Web3 Companies Make Meaningful Partnerships"
        />
        <meta
          property="twitter:description"
          content="NeoCast is an AI-powered platform that effortlessly connects Web3 projects, enabling exponential growth by identifying perfect collaborations."
        />
        <meta property="twitter:image" content="/meta-image.png" />
      </Head>

      <ApplicationLayout>
        <div className="max-w-3xl mx-auto">
          <div className="text-2xl font-black leading-7 text-zinc-900">
            Create Your Channel
          </div>
          <p className="mt-1 text-sm leading-6 text-zinc-600">
            NeoCast makes it extremely easy to open and maintain a genuine
            channel of communication with your users.
          </p>

          <div className="mt-8">
            <form className="space-y-8">
              <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-zinc-300 focus-within:ring-2 focus-within:ring-secondary-600">
                <label
                  htmlFor="name"
                  className="block text-xs font-medium text-zinc-900"
                >
                  Channel Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full border-0 p-0 text-zinc-900 placeholder:text-zinc-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Barbie Updates"
                />
              </div>

              <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-zinc-300 focus-within:ring-2 focus-within:ring-secondary-600">
                <label
                  htmlFor="name"
                  className="block text-xs font-medium text-zinc-900"
                >
                  Channel Description
                </label>
                <textarea
                  rows={4}
                  name="channelDescription"
                  id="channelDescription"
                  className="block w-full px-0 rounded-md border-0 py-1.5 text-zinc-900 ring-0 focus:ring-0 placeholder:text-zinc-400 sm:text-sm sm:leading-6"
                  placeholder="Barbie is a 2023 American fantasy comedy film directed by Greta Gerwig from a screenplay she wrote with Noah Baumbach..."
                />
              </div>

              <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-zinc-300 focus-within:ring-2 focus-within:ring-secondary-600">
                <label
                  htmlFor="name"
                  className="block text-xs font-medium text-zinc-900"
                >
                  Website URL
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full border-0 p-0 text-zinc-900 placeholder:text-zinc-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Barbie Updates"
                />
              </div>

              <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-zinc-300 focus-within:ring-2 focus-within:ring-secondary-600">
                <label
                  htmlFor="name"
                  className="block text-xs font-medium text-zinc-900"
                >
                  Logo URL
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full border-0 p-0 text-zinc-900 placeholder:text-zinc-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Barbie Updates"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="rounded-md bg-secondary-600 px-8 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-600"
                >
                  Create Channel
                </button>
              </div>
            </form>
          </div>
        </div>
      </ApplicationLayout>
    </>
  );
}
