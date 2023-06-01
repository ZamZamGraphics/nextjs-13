import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <div className="container">
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-12 md:col-span-4 mb-3">
              <h3 className="footer-title">আমাদের সম্পর্কে</h3>
              <p>
                জমজম গ্রাফিক্স ব্রাহ্মণবাড়িয়া শহরে একটি মানসম্মত ডিজাইন এবং
                প্রিন্টিং হাউজ। দক্ষ ও অভিজ্ঞ ডিজাইনার দ্বারা নিত্য নতুন ডিজাইন
                তৈরী করে। এটি শুধুমাত্র একটি ডিজাইন ঘরই নয়, বরং রুচিশীল
                কাস্টমারের চাহিদা অনুযায়ী ডিজাইনকে সাজাতে সর্বাধিক চেষ্টা ও
                সহযোগিতা করে থাকে। জমজম গ্রাফিক্স গ্রাফিক্স ডিজাইন এবং ওয়েব
                ডেভেলপমেন্ট এর ক্ষেত্রে সর্বোচ্চ মানের সেবা প্রদান করে থাকে।
              </p>
            </div>
            <div className="col-span-12 md:col-span-8">
              <div className="grid grid-cols-12 gap-3">
                <div className="col-span-12 sm:col-span-6 md:col-span-4 mb-3">
                  <h3 className="footer-title">কুইক লিংক</h3>
                  <ul>
                    <li>
                      <Link href="/">হোম</Link>
                    </li>
                    <li>
                      <Link href="/services">সেবাসমূহ</Link>
                    </li>
                    <li>
                      <Link href="/about-us">আমাদের সম্পর্কে</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">প্রোটফোলিও</Link>
                    </li>
                    <li>
                      <Link href="/service-plan">সেবা পরিকল্পনা</Link>
                    </li>
                    <li>
                      <Link href="/testimonials">সস্তুষ্টি মন্তব্য</Link>
                    </li>
                    <li>
                      <Link href="/contact-us">যোগাযোগ</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-span-12 sm:col-span-6 md:col-span-4 mb-3">
                  <h3 className="footer-title">সেবা সমূহ</h3>
                  <ul>
                    <li>
                      <Link href="/services/graphics-design">
                        গ্রাফিক্স ডিজাইন
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/design-print">
                        ডিজাইন প্রিন্টিং
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/web-design">ওয়েব ডিজাইন</Link>
                    </li>
                    <li>
                      <Link href="/services/web-development">
                        ওয়েব ডেভেলপমেন্ট
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-span-12 sm:col-span-6 md:col-span-4 mb-3">
                  <h3 className="footer-title">যোগাযোগ</h3>
                  <ul className="break-words">
                    <li>
                      মসজিদ মার্কেট (২য় তলা), মসজিদ রোড, ব্রাহ্মণবাড়িয়া -3400,
                      বাংলাদেশ।
                    </li>
                    <li>
                      <Link href="tel:+8801716426093">+৮৮০ ১৭১৬ ৪২৬০৯৩</Link>
                      <br />
                      <Link href="tel:+8801816426093">+৮৮০ ১৮১৬ ৪২৬০৯৩</Link>
                    </li>
                    <li>
                      <Link href="mailto:zamzamprintmedia@gmail.com">
                        zamzamprintmedia@gmail.com
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="text-center text-sm p-3 bg-slate-900 text-slate-500">
        কপিরাইট © ২০২২. <Link href="/">জমজম গ্রাফিক্স</Link> | সর্বসত্ত্ব
        সংরক্ষিত
      </div>
    </>
  );
}
