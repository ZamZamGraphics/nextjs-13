import Link from "next/link";
import style from "../styles/pagetitle.module.css";

export default function PageTitle({ title }) {
  return (
    <div className={style.bg}>
      <h2 className={style.heading}>{title}</h2>
      <div className="text-md breadcrumbs">
        <ul className="justify-center">
          <li>
            <Link href="/">হোম</Link>
          </li>
          <li>{title}</li>
        </ul>
      </div>
    </div>
  );
}
