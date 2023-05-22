import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function index() {
  return (
    <>
      <Head>
        <title>ZamZam Graphics</title>
      </Head>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
}
