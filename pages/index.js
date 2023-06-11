import Head from "next/head";
import axios from "../lib/axios";
import Header from "@/components/Header";
import Services from "@/components/services";
import AboutUs from "@/components/AboutUs";
import Portfolio from "../components/portfolio";

export default function index({ headers, services, portfolio }) {
  return (
    <>
      <Head>
        <title>জমজম গ্রাফিক্স</title>
      </Head>
      <Header headers={headers} />
      <h2 className="heading">আমাদের সেবাসমূহ</h2>
      <Services services={services} />
      <h2 className="heading">আমাদের সম্পর্কে</h2>
      <AboutUs />
      <div className="bg-emerald-50 dark:bg-slate-800">
        <h2 className="heading pt-10">পোর্টফোলিও</h2>
      </div>
      <Portfolio portfolio={portfolio} />
    </>
  );
}

export async function getServerSideProps() {
  const headerResponse = await axios("header");
  const serviceResponse = await axios("services");
  const portfolioResponse = await axios("portfolio");

  const headers = await headerResponse.data;
  const services = await serviceResponse.data;
  const portfolio = await portfolioResponse.data;
  return { props: { headers, services, portfolio } };
}
