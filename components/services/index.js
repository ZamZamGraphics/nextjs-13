import style from "../../styles/services.module.css";
import Service from "./Service";

export default function index({ services }) {
  return (
    <section className="p-10">
      <div className="container">
        <div className={style.gridcss}>
          {services.map((service) => (
            <Service
              key={Math.random()}
              title={service.title}
              slug={service.slug}
              icon={service.icon}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
