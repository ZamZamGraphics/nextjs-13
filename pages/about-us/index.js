import axios from "../../lib/axios";
import PageTitle from "@/components/PageTitle";
import Head from "next/head";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/services";

export default function index({ services }) {
  return (
    <>
      <Head>
        <title>আমাদের সম্পর্কে | জমজম গ্রাফিক্স</title>
      </Head>
      <PageTitle title="আমাদের সম্পর্কে" />
      <AboutUs />
      <h2 className="heading">আমাদের সেবাসমূহ</h2>
      <Services services={services} />
    </>
  );
}

export async function getServerSideProps() {
  const res = await axios("services");
  const services = await res.data;
  return { props: { services } };
}
