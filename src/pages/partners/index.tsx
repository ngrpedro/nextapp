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
      <nav className="flex mb-5" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-blue-900"
            >
              <HouseSimple size={20} />
              Inicio
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <Link
                href="/partners"
                className="inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-blue-900"
              >
                <CaretRight className="text-gray-900" size={16} />
                Todos os parceiros
              </Link>
            </div>
          </li>
        </ol>
      </nav>
      <div>
        <Hero />
        <PartnerView partners={partners} />
      </div>
    </div>
  );
};

export default index;
