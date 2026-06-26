import React from "react";

const focusAreas = [
  "Customer-facing platforms",
  "Internal operations tools",
  "Cloud-powered products",
];

export default function Positioning() {
  return (
    <section id="insights" className="bg-background-100 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl  py-7">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1fr] lg:items-start">
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Built for businesses that need more than just a website.
          </h2>
          <div>
            <p className="text-lg leading-8 text-foreground-200">
              Fegig Tech helps founders, teams, and organisations design, build, and launch reliable
              digital systems, from customer-facing platforms to internal tools and cloud-powered products.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {focusAreas.map((item) => (
                <div key={item} className="border-l border-violet-300/45 pl-4">
                  <p className="text-sm font-semibold text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
