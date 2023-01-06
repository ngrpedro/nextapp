import Head from "next/head";
import React from "react";
import Layout from "./../components/layout";

const index = () => {
  return (
    <div className="bg-gradient-to-r from-[#021d5a] to-[#502a01] text-white pt-4">
      <Head>
        <title>Home</title>
      </Head>
      <Layout>
        <div className="h-screen">teste</div>
      </Layout>
    </div>
  );
};

export default index;
