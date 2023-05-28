import Service from "./Service";

export default function index({ services }) {
  return (
    <section className="p-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
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
