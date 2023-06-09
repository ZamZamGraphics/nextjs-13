import Image from "next/image";
import Link from "next/link";
import style from "../../styles/portfolio.module.css";

export default function PortfolioItem({ title, imageUrl, projectUrl }) {
  return (
    <div className="mb-7 bg-base-100 text-slate-700 dark:text-slate-300 hover:-translate-y-3 transition-all duration-500 rounded-[18px] shadow-lg">
      <div className="overflow-hidden cursor-pointer rounded-[18px]">
        <Image
          src={imageUrl}
          alt={title}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }} // optional
        />
      </div>
      <Link href={projectUrl}>
        <div className="p-4 text-center text-xl">{title}</div>
      </Link>
    </div>
  );
}
