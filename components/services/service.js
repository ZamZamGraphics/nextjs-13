import Link from "next/link";

export default function Service({ title, slug, icon, description }) {
  return (
    <div className="mb-7 p-5 cursor-pointer flex flex-row flex-wrap justify-center content-between bg-base-100 border border-slate-100 shadow-md dark:border-slate-700 hover:scale-105 rounded-xl transition-all duration-500">
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
        <Link
          href={`/services/${slug}`}
          className="btn btn-primary btn-sm px-5 font-normal text-lg rounded-full"
        >
          বিস্তারিত
        </Link>
      </div>
    </div>
  );
}
