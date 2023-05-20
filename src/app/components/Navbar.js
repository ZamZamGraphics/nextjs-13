import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-base-100 shadow-sm sticky-top">
        <div className="container">
          <Link href="/" className="navbar-brand">
            <Image
              src="https://zamzamgraphics.github.io/ZamZamGraphics/images/header_logo.svg"
              alt="ZamZam Graphics"
              width={200}
              height={55}
            />
          </Link>
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-4" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" href="/">
                  হোম
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/services">
                  সেবাসমূহ
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/about-us">
                  আমাদের সম্পর্কে
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/portfolio">
                  প্রোটফোলিও
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/service-plan">
                  সেবা পরিকল্পনা
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/testimonials">
                  সস্তুষ্টি মন্তব্য
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contact-us">
                  যোগাযোগ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="drawer drawer-end absolute z-40">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
          <ul className="p-4 w-60 bg-base-100 navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" href="/">
                হোম
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/services">
                সেবাসমূহ
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about-us">
                আমাদের সম্পর্কে
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/portfolio">
                প্রোটফোলিও
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/service-plan">
                সেবা পরিকল্পনা
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/testimonials">
                সস্তুষ্টি মন্তব্য
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact-us">
                যোগাযোগ
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
