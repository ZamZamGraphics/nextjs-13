import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageTitle from "@/components/PageTitle";
import Head from "next/head";

export default function index() {
  return (
    <>
      <Head>
        <title>আমাদের সম্পর্কে | জমজম গ্রাফিক্স</title>
      </Head>
      <Navbar />
      <PageTitle title="আমাদের সম্পর্কে" />
      <div className="container">
        <p className="p-6">
          জমজম গ্রাফিক্স ব্রাহ্মণবাড়িয়া শহরে একটি মানসম্মত ডিজাইন এবং
          প্রিন্টিং হাউজ। দক্ষ ও অভিজ্ঞ ডিজাইনার দ্বারা নিত্য নতুন ডিজাইন তৈরী
          করে। এটি শুধুমাত্র একটি ডিজাইন ঘরই নয়, বরং রুচিশীল কাস্টমারের চাহিদা
          অনুযায়ী ডিজাইনকে সাজাতে সর্বাধিক চেষ্টা ও সহযোগিতা করে থাকে। জমজম
          গ্রাফিক্স গ্রাফিক্স ডিজাইন এবং ওয়েব ডেভেলপমেন্ট এর ক্ষেত্রে সর্বোচ্চ
          মানের সেবা প্রদান করে থাকে।
        </p>
      </div>
      <Footer />
    </>
  );
}
