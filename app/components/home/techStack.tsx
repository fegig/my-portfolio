import React from "react";
import { motion } from "framer-motion";

const Stacks = () => {
  const stacks = [
    { name: "HTML", icon: "html.png" },
    { name: "JS", icon: "js.png" },
    { name: "TS", icon: "ts.png" },
    { name: "CSS", icon: "css.png" },
    { name: "Tailwind", icon: "tailwind.png" },
    { name: "React", icon: "react.png" },
    { name: "React Native", icon: "RN.png" },
    { name: "Svelte", icon: "svelte.png" },
    { name: "React Router", icon: "rr7.png" },
    { name: "Expo", icon: "expo.png" },
    { name: "Next js", icon: "next.png" },
    { name: "Solid js", icon: "solid.png" },
    { name: "Tanstack", icon: "tq.png" },
    { name: "PHP", icon: "PHP.png" },
    { name: "Laravel", icon: "laravel.png" },
    { name: "Photoshop", icon: "ps.png" },
    { name: "Hono", icon: "hono.png" },
    { name: "Worker", icon: "cf.png" },


  ];

  const doubled = [...stacks, ...stacks];

  return (
     <section id="insights" className="bg-background-100 px-4 sm:px-6 lg:px-8">
    <div className="relative overflow-hidden my-2 mx-auto max-w-7xl  py-7">
      {/* Left fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10 bg-linear-to-r from-background-100 to-transparent" />
      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10 bg-linear-to-l from-background-100 to-transparent" />
<div className="max-w-lg mx-auto text-center py-4 text-neutral-400">
Our Preferred Tech Stack

</div>
      <motion.div
        className="flex items-center gap-16 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((stack, index) => (
          <div key={`${stack.name}-${index}`} className="shrink-0 w-16 h-16">
            <img
              src={`/icons/${stack.icon}`}
              alt={stack.name}
              className="w-full h-full object-contain smooth grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </motion.div>
    </div>
    </section>
  );
};

export default Stacks;