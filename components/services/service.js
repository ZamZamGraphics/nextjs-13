import style from "../../styles/services.module.css";
import Link from "next/link";

export default function Service({ title, slug, icon, description }) {
  return (
    <div className={style.box}>
      <div className="space-y-4 text-center mb-3">
        <div className="text-4xl w-full p-1">
          <i className={icon}></i>
        </div>
        <h3 className="text-2xl">
          <Link href={`/services/${slug}`}>{title}</Link>
        </h3>
        <p className="mb-5">{description}</p>
      </div>
      <div>
        <Link href={`/services/${slug}`} className={style.more}>
          বিস্তারিত
        </Link>
      </div>
    </div>
  );
}
