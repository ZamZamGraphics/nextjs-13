import Link from "next/link";

export default function service() {
  return (
    <div className="mb-7 p-5 cursor-pointer space-y-4 text-center bg-base-100 border border-slate-100 shadow-md dark:border-slate-700 hover:scale-105 rounded-xl transition-all duration-500">
      <div className="w-14 p-1 mx-auto fill-primary">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z" />
        </svg>
      </div>
      <h3 className="text-2xl">
        <Link href="/">গ্রাফিক্স ডিজাইন</Link>
      </h3>
      <p>
        দক্ষ ও অভিজ্ঞ ডিজাইনার দ্বারা নিত্য নতুন ডিজাইন তৈরী করে রুচিশীল
        কাস্টমারের চাহিদা অনুযায়ী সকল প্রকার ডিজাইন সেবা দিয়ে থাকি।
      </p>
      <Link
        href="/"
        className="btn btn-primary btn-sm px-5 bg-gradient-to-r from-[#4BA2D3] to-[#7335FE] font-normal text-lg rounded-full border-none"
      >
        বিস্তারিত
      </Link>
    </div>
  );
}
