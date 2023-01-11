import Head from "next/head";
import Link from "next/link";
import React from "react";
import Hero from "../../components/partners/PartnerHero";
import PartnerView from "../../components/partners/partnerView";
import { GetServerSideProps } from "next";
import { Partner } from "../../utils/interfaces";
import { CaretRight, HouseSimple } from "phosphor-react";

type Props = {
  partners?: Partner[];
};

export async function getAllPartners() {
  const res = await fetch("http://localhost:3000/api/partners");
  const partners: Partner[] = await res.json();

  return partners;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const partners = await getAllPartners();
  return {
    props: {
      partners,
    },
  };
};

const index = ({ partners }: Props) => {
  return (
    <div className="text-gray-800 overflow-hidden">
      <Head>
        <title>Parceiros</title>
      </Head>
      <div className="text-sm font-semibold text-slate-700 breadcrumbs">
        <ul>
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>Parceiros</li>
        </ul>
      </div>
      <div>
        <Hero />
        <PartnerView partners={partners} />
      </div>
    </div>
  );
};

export default index;
