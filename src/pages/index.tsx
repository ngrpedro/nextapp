import Head from "next/head";
import React from "react";
import Hero from "../components/sections/hero";
import Layout from "./../components/layout";

const index = () => {
  return (
    <div className="bg-gradient-to-r from-[#021d5a] to-[#2f1800] text-white pt-4">
      <Head>
        <title>Home</title>
      </Head>
      <Layout>
        <Hero />
      </Layout>
    </div>
  );
};

export default index;
