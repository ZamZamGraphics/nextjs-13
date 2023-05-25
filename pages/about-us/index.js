import PageTitle from "@/components/PageTitle";
import Head from "next/head";
import Services from "@/components/services";

export default function index() {
  return (
    <>
      <Head>
        <title>আমাদের সম্পর্কে | জমজম গ্রাফিক্স</title>
      </Head>
      <PageTitle title="আমাদের সম্পর্কে" />
      <Services />
    </>
  );
}
