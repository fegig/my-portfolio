import React from "react";

const metrics = [
  { value: "10+", label: "Years of practical product experience" },
  { value: "50+", label: "Projects and product surfaces delivered" },
  { value: "98%", label: "Client satisfaction across delivery cycles" },
  { value: "Always", label: "Built with maintenance in mind" },
];

export default function Metrics() {
  return (
    <section className="bg-background-100 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
         <div className="max-w-lg mx-auto text-center py-7">
            <div className="text-3xl  lg:text-5xl font-semibold tracking-tight text-white">Products built to ship</div>
            <p className="mt-2 text-lg leading-6 text-foreground-200">Project-led in React Native, React, TypeScript, and Git and Cloudflare technologies.</p>
          </div>
        <div className="grid sm:grid-cols-2  lg:grid-cols-3 items-center ">
       
          {metrics.map((metric) => (
            <div key={metric.label} className="px-0 py-8 sm:px-6 flex flex-col items-center justify-center max-w-sm mx-auto last:lg:col-start-2" >
              <div className="text-3xl  lg:text-5xl  font-semibold tracking-tight text-white">{metric.value}</div>
              <p className="mt-2 text-sm leading-6 text-foreground-200">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
