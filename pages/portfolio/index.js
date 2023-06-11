import axios from "../../lib/axios";
import Head from "next/head";
import PageTitle from "@/components/PageTitle";
import Portfolio from "@/components/portfolio";

export default function index({ portfolio }) {
  return (
    <>
      <Head>
        <title>পোর্টফোলিও | জমজম গ্রাফিক্স</title>
      </Head>
      <PageTitle title="পোর্টফোলিও" />
      <Portfolio portfolio={portfolio} />
    </>
  );
}

export async function getServerSideProps() {
  const res = await axios("portfolio");
  const portfolio = await res.data;
  return { props: { portfolio } };
}
