import PageTitle from "@/components/PageTitle";
import Head from "next/head";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/services";

export default function index() {
  return (
    <>
      <Head>
        <title>আমাদের সম্পর্কে | জমজম গ্রাফিক্স</title>
      </Head>
      <PageTitle title="আমাদের সম্পর্কে" />
      <AboutUs />
      <h2 className="text-4xl mt-10 text-center font-bold uppercase text-slate-700 dark:text-slate-300">
        আমাদের সেবাসমূহ
      </h2>
      <Services />
    </>
  );
}
