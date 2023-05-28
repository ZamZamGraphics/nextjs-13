import PageTitle from "@/components/PageTitle";
import Head from "next/head";
import Services from "@/components/services";

export default function index({ services }) {
  return (
    <>
      <Head>
        <title>আমাদের সেবাসমূহ | জমজম গ্রাফিক্স</title>
      </Head>
      <PageTitle title="আমাদের সেবাসমূহ" />
      <Services services={services} />
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/services");
  const services = await res.json();
  return { props: { services } };
}
