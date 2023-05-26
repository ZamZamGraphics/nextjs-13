import Link from "next/link";
import React from "react";

export default function PageTitle({ title }) {
  return (
    <div className="text-center bg-blue-100 dark:bg-slate-950 py-10 sm:py-20 md:py-24">
      <h2 className="text-4xl font-bold uppercase text-slate-700 dark:text-slate-300">
        {title}
      </h2>
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
