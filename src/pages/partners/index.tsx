import Head from "next/head";
import React from "react";
import Hero from "../../components/sections/hero";
import PartnerView from "../../components/sections/partnerView";
import { GetServerSideProps } from "next";
import { Partner } from "../../utils/interfaces";

type Props = {
  partners: Partner[];
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/partners");
  const partners: Partner[] = await res.json();

  return {
    props: {
      partners,
    },
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
