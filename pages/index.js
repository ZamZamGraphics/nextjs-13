import Hero from "@/components/Hero";
import Head from "next/head";
import Services from "@/components/services";
import AboutUs from "@/components/AboutUs";

export default function index() {
  return (
    <>
      <Head>
        <title>জমজম গ্রাফিক্স</title>
      </Head>
      <Hero />
      <h2 className="text-4xl mt-10 text-center font-bold uppercase text-slate-700 dark:text-slate-300">
        আমাদের সেবাসমূহ
      </h2>
      <Services />
      <h2 className="text-4xl mt-10 text-center font-bold uppercase text-slate-700 dark:text-slate-300">
        আমাদের সম্পর্কে
      </h2>
      <AboutUs />
    </>
  );
}
