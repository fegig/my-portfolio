import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { projectList } from "../sections/Projects";

const featuredNames = ["Ootu Academy", "Giov POS", "Cellus Web"];

export default function HomeProjectPreview() {
  const featured = featuredNames
    .map((name) => projectList.find((project) => project.name === name))
    .filter((project) => project !== undefined);

  return (
    <section className="bg-background-100 py-24 sm:py-32">
      <div className="site-shell">
        <div className="flex flex-col gap-8 border-b border-white/15 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="kicker">In the field</p>
            <h2 className="section-title mt-6 max-w-[10ch]">
              Systems with a job to do.
            </h2>
          </div>
          <Link to="/projects" className="text-link">
            Open the full index
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-10 pt-10 lg:grid-cols-3">
          {featured.map((project, index) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div
                className={`relative overflow-hidden border border-white/15 bg-background-200 ${
                  project.type === "mobile" ? "aspect-[4/5]" : "aspect-[4/3]"
                }`}
              >
                <img
                  src={project.image}
                  alt={`${project.name} interface`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.025]"
                />
                <span className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center bg-background-100 text-white transition group-hover:bg-color-3 group-hover:text-background-100">
                  <ArrowUpRight size={17} />
                </span>
              </div>
              <div className="border-b border-white/15 py-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-color-alt">
                  0{index + 1} / {project.discipline}
                </p>
                <h3 className="mt-3 text-2xl font-medium tracking-[-0.035em] text-white">
                  {project.name}
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-foreground-200">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
