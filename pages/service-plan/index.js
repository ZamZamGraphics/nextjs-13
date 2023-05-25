import PageTitle from "@/components/PageTitle";
import Head from "next/head";
import Services from "@/components/services";

export default function index() {
  return (
    <>
      <Head>
        <title>সেবা পরিকল্পনা | জমজম গ্রাফিক্স</title>
      </Head>
      <PageTitle title="সেবা পরিকল্পনা" />
      <Services />
    </>
  );
}
