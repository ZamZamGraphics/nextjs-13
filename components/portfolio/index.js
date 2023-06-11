import PortfolioItem from "./PortfolioItem";
import style from "../../styles/portfolio.module.css";

export default function index({ portfolio }) {
  return (
    <section className="p-10 bg-emerald-50 dark:bg-slate-800">
      <div className="container">
        <div className={style.gridcss}>
          {portfolio.map((item) => (
            <PortfolioItem
              key={item.id}
              title={item.title}
              imageUrl={item.imageUrl}
              projectUrl={item.projectUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
