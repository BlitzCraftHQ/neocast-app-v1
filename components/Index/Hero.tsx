import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div
        id="hero"
        className="isolate bg-gradient-to-r from-primary-900 to-secondary-900 overflow-hidden"
      >
        <svg
          className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-zinc-100/20 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg
            x="50%"
            y={-1}
            className="overflow-visible fill-secondary-500/20"
          >
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
          />
        </svg>
        <div
          className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          aria-hidden="true"
        >
          <div
            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
            }}
          />
        </div>
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-16 lg:px-8 lg:pt-12 lg:pb-24 xl:pt-0">
            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight text-white">
                  {/* The First Comms Protocol for the <br /> Neo Blockchain! */}
                  Push Notification Service for the <br /> Neo Blockchain.
                </h1>
                <p className="relative mt-6 text-xl font-medium leading-8 text-zinc-100 sm:max-w-md lg:max-w-none">
                  Stay informed and in-the-know with real-time push
                  notifications on transactions, smart contracts, and network
                  developments. Empower your Neo experience with NeoCast&apos;s
                  timely alerts, ensuring you never miss a beat on the Neo
                  Blockchain.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    href="#sign-up"
                    scroll={false}
                    className="rounded-md bg-secondary-600 shadow-[0px_0px_40px_30px_#e5167024] px-12 py-4 text-xl font-semibold text-white hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-all ease-in-out duration-200"
                  >
                    Launch dApp
                  </Link>
                </div>
              </div>
              <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-end sm:pl-20 lg:mt-0 lg:pl-0">
                <svg
                  viewBox="0 0 366 729"
                  role="img"
                  className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl"
                >
                  <title>App screenshot</title>
                  <defs>
                    <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                      <rect width={316} height={684} rx={36} />
                    </clipPath>
                  </defs>
                  <path
                    fill="#27272a"
                    d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
                  />
                  <path
                    fill="#3f3f46"
                    d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
                  />
                  <foreignObject
                    width={316}
                    height={684}
                    transform="translate(24 24)"
                    clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
                  >
                    <img
                      src="https://tailwindui.com/img/component-images/mobile-app-screenshot.png"
                      alt=""
                    />
                  </foreignObject>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
