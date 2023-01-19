import Head from "next/head";
import Link from "next/link";
import React from "react";
import Hero from "../../components/partners/PartnerHero";
import PartnerView from "../../components/partners/partnerView";
import Layout from "../../components/layouts/layout";


const index = () => {
  return (
      <Layout>
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
    </Layout>

  );
};

export default index;
