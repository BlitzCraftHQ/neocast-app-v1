import Head from "next/head";
import Layout from "@/components/Utilities/Layout";
import Hero from "@/components/Index/Hero";
import Why from "@/components/Index/Why";
import FAQ from "@/components/Index/FAQ";
import BetaSignUp from "@/components/Index/BetaSignUp";
import Problem from "@/components/Index/Problem";

export default function Landing() {
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

      <Layout>
        <Hero />
        <Problem />
        <Why />
        <BetaSignUp />
        <FAQ />
      </Layout>
    </>
  );
}
