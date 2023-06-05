import { useEffect, useRef } from "react";
import NavItems from "./NavItems";
import style from "../../styles/navbar.module.css";

export default function Drawer({ show, close }) {
  const menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        close();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div
      ref={menuRef}
      className={`${style.offcanvas} ${style.offcanvasEnd} ${show}`}
    >
      <div className={style.offcanvasHeader}>
        <button
          type="button"
          className="btn btn-circle btn-ghost"
          onClick={close}
        >
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
      <div className={style.offcanvasBody}>
        <NavItems classes="menu w-80 bg-base-100" close={close} />
      </div>
    </div>
  );
}
