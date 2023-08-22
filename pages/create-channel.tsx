import Head from "next/head";
import ApplicationLayout from "@/components/Utilities/ApplicationLayout";

export default function CreateChannel() {
  return (
    <>
      <Head>
        <title>
          Create Channel - NeoCast | Push Notification Service for the Neo
          Blockchain
        </title>
        <meta
          name="title"
          content="Create Channel - NeoCast | Push Notification Service for the Neo Blockchain"
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
          content="Create Channel - NeoCast | Push Notification Service for the Neo Blockchain"
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
          content="Create Channel - NeoCast | Push Notification Service for the Neo Blockchain"
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
            Create Your Channel
          </div>
          <div className="mt-1 text-sm leading-6 text-zinc-600">
            NeoCast makes it extremely easy to open and maintain a genuine
            channel of communication with your users.
          </div>

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
                  htmlFor="channelDescription"
                  className="block text-xs font-medium text-zinc-900"
                >
                  Channel Description
                </label>
                <textarea
                  rows={4}
                  name="channelDescription"
                  id="channelDescription"
                  className="block w-full px-0 rounded-md border-0 py-1.5 text-zinc-900 ring-0 focus:ring-0 placeholder:text-zinc-400 sm:text-sm sm:leading-6"
                  placeholder="Pied Piper (PP) was an American tech company based in Silicon Valley, California. The company was formed in 2014 by Richard Hendricks as a company to develop Richard's algorithm that he'd created..."
                />
              </div>

              <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-zinc-300 focus-within:ring-2 focus-within:ring-secondary-600">
                <label
                  htmlFor="websiteURL"
                  className="block text-xs font-medium text-zinc-900"
                >
                  Website URL
                </label>
                <input
                  type="text"
                  name="websiteURL"
                  id="websiteURL"
                  className="block w-full border-0 p-0 text-zinc-900 placeholder:text-zinc-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="https://piedpiper.com"
                />
              </div>

              <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-zinc-300 focus-within:ring-2 focus-within:ring-secondary-600">
                <label
                  htmlFor="logoURL"
                  className="block text-xs font-medium text-zinc-900"
                >
                  Logo URL
                </label>
                <input
                  type="text"
                  name="logoURL"
                  id="logoURL"
                  className="block w-full border-0 p-0 text-zinc-900 placeholder:text-zinc-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="https://piedpiper.com/logo.png"
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
