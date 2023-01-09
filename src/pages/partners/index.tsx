import Head from "next/head";
import React from "react";
import Hero from "../../components/sections/hero";
import PartnerView from "../../components/sections/partnerView";
import { GetStaticProps } from "next";
import { Partner } from "../../utils/interfaces";

type Props = {
  partners: Partner[];
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/partners");
  const partners: Partner[] = await res.json();

  return {
    props: {
      partners,
    },
    revalidate: 20,
  };
};

const index = ({ partners }: Props) => {
  return (
    <div className="text-gray-800 pt-4 overflow-hidden">
      <Head>
        <title>Home</title>
      </Head>
      <Hero />
      <PartnerView partners={partners} />
    </div>
  );
};

export default index;
