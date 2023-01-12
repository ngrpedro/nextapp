import Head from "next/head";
import Link from "next/link";
import React from "react";
import Hero from "../../components/partners/PartnerHero";
import PartnerView from "../../components/partners/partnerView";

const index = () => {
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
        <PartnerView />
      </div>
    </div>
  );
};

export default index;
