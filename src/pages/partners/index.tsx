import Head from "next/head";
import React from "react";
import Hero from "../../components/sections/hero";
import PartnerView from "../../components/sections/partnerView";
import Layout from "../../components/layouts/layout";

const index = () => {
  return (
    <div className="text-gray-800 pt-4 overflow-hidden">
      <Head>
        <title>Home</title>
      </Head>
      <Hero />
      <PartnerView />
    </div>
  );
};

export default index;
