import React from "react";
import Service from "./service";

export default function index() {
  return (
    <section className="p-10">
      <div className="container">
        {/* col-sm-12 col-md-6 col-lg-3 d-flex */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          <Service />
          <Service />
          <Service />
          <Service />
        </div>
      </div>
    </section>
  );
}
