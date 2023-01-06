import Head from "next/head";
import React from "react";
import Hero from "../components/sections/hero";
import PartnerView from "../components/sections/partnerView";
import Layout from "./../components/layout";

const index = () => {
  return (
    <div className="text-gray-800 pt-4 overflow-hidden">
      <Head>
        <title>Home</title>
      </Head>
      <Layout>
        <Hero />
        <PartnerView />
      </Layout>
    </div>
  );
};

export default index;
