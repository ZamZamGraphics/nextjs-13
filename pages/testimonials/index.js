import PageTitle from "@/components/PageTitle";
import Head from "next/head";
import Services from "@/components/services";

export default function index() {
  return (
    <>
      <Head>
        <title>সন্তুষ্টি মন্তব্য | জমজম গ্রাফিক্স</title>
      </Head>
      <PageTitle title="সন্তুষ্টি মন্তব্য" />
      <Services />
    </>
  );
}
