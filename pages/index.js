import Hero from "@/components/Hero";
import Head from "next/head";
import Services from "@/components/services";
import AboutUs from "@/components/AboutUs";

export default function index({ services }) {
  return (
    <>
      <Head>
        <title>জমজম গ্রাফিক্স</title>
      </Head>
      <Hero />
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
  const res = await fetch("http://localhost:3000/api/services");
  const services = await res.json();
  return { props: { services } };
}
