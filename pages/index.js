import Head from "next/head";
import axios from "../lib/axios";
import Header from "@/components/Header";
import Services from "@/components/services";
import AboutUs from "@/components/AboutUs";

export default function index({ headers, services }) {
  return (
    <>
      <Head>
        <title>জমজম গ্রাফিক্স</title>
      </Head>
      <Header headers={headers} />
      <h2 className="text-4xl mt-10 text-center font-bold uppercase text-slate-700 dark:text-slate-300">
        আমাদের সেবাসমূহ
      </h2>
      <Services services={services} />
      <h2 className="text-4xl mt-10 text-center font-bold uppercase text-slate-700 dark:text-slate-300">
        আমাদের সম্পর্কে
      </h2>
      <AboutUs />
    </>
  );
}

export async function getServerSideProps() {
  const headerResponse = await axios("header");
  const serviceResponse = await axios("services");

  const headers = await headerResponse.data;
  const services = await serviceResponse.data;
  return { props: { headers, services } };
}
