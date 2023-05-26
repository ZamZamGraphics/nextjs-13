import PageTitle from "@/components/PageTitle";
import Head from "next/head";
import Services from "@/components/services";

export default function index() {
  return (
    <>
      <Head>
        <title>পোর্টফোলিও | জমজম গ্রাফিক্স</title>
      </Head>
      <PageTitle title="পোর্টফোলিও" />
      <Services />
    </>
  );
}
