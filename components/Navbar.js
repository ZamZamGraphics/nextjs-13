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
            <button
              type="button"
              className="btn btn-square btn-ghost"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
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
            </button>
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
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <button type="button" data-bs-dismiss="offcanvas">
            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </button>
        </div>
        <div className="offcanvas-body">
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
