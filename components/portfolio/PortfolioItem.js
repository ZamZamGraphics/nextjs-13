import Image from "next/image";
import Link from "next/link";
import style from "../../styles/portfolio.module.css";

export default function PortfolioItem({ title, imageUrl, projectUrl }) {
  return (
    <div className={style.item}>
      <div className={style.thumbnail}>
        <Image
          src={imageUrl}
          alt={title}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }} // optional
        />
        <div className="project-details">
          <Link href={projectUrl}>
            <i className="fa-solid fa-link"></i>
          </Link>
          <Link href={`/portfolio/1`}>
            <i className="fa-solid fa-share"></i>
          </Link>
        </div>
      </div>
      <h3>{title}</h3>
    </div>
  );
}
