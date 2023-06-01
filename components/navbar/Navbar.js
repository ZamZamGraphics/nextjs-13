import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";
import Drawer from "./Drawer";
import { useState } from "react";
import logo from "../../public/logo_light.svg";

export default function Navbar() {
  const [show, setShow] = useState(false);

  const drawerClick = () => {
    if (!show) {
      setShow("show");
    }
  };

  const handleClose = () => setShow("");

  return (
    <>
      <nav className="navbar bg-base-100 shadow md:shadow-md sticky top-0 z-40">
        <div className="container">
          <div className="flex-1">
            <Link href="/" className="navbar-brand">
              <Image
                src={logo}
                alt="ZamZam Graphics"
                width={0}
                height={0}
                style={{ height: "auto" }}
              />
            </Link>
          </div>
          <div className="flex-none lg:hidden">
            <button
              type="button"
              className="btn btn-square btn-ghost"
              onClick={drawerClick}
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
          <div className="flex-none hidden lg:block">
            <NavItems classes="menu menu-horizontal" />
          </div>
        </div>
      </nav>
      <Drawer show={show} close={handleClose} />
      {show && (
        <div className="offcanvas-backdrop transition-opacity duration-150 ease-linear show"></div>
      )}
    </>
  );
}
