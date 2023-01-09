import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/layouts/layout";

const Profile = () => {
  const router = useRouter();
  const partnerId = router.query.id;

  return (
    <div>
      <Head>
        <title>Parceiro</title>
      </Head>

      <div>{partnerId}</div>
    </div>
  );
};

export default Profile;
