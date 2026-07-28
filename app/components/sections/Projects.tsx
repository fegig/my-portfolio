import { ArrowUpRight } from "lucide-react";

export type ProjectType = {
  name: string;
  type: "web" | "mobile";
  description: string;
  stacks: { name: string; icon: string }[];
  image: string;
  buttonColor: string;
  link: string;
  status: "in-development" | "live";
  discipline: string;
};

export const projectList: ProjectType[] = [
  {
    name: "Ootu Academy",
    type: "web",
    discipline: "Learning platform",
    description:
      "A guided technology-learning platform connecting students with structured programs, mentors, and accessible course delivery.",
    stacks: [
      { name: "React Router 7", icon: "rr7.png" },
      { name: "Cloudflare Workers", icon: "cf.png" },
      { name: "Hono", icon: "hono.png" },
      { name: "TypeScript", icon: "ts.png" },
    ],
    image: "/assets/shots/ootu-academy.png",
    buttonColor: "#21181e",
    link: "https://ootu.me",
    status: "live",
  },
  {
    name: "Cellus Web",
    type: "web",
    discipline: "Financial operations",
    description:
      "A unified interface for bills, transfers, digital assets, and connected financial services.",
    stacks: [
      { name: "React", icon: "react.png" },
      { name: "TypeScript", icon: "ts.png" },
      { name: "React Router", icon: "rr7.png" },
      { name: "TanStack Query", icon: "tq.png" },
    ],
    image: "/assets/shots/cellus-web.png",
    buttonColor: "#052659",
    link: "https://cellus.app",
    status: "live",
  },
  {
    name: "Exdra Web",
    type: "web",
    discipline: "Group utilities",
    description:
      "Shared payments for airtime, data, television, utilities, and group finance inside a single clique-based flow.",
    stacks: [
      { name: "React", icon: "react.png" },
      { name: "TypeScript", icon: "ts.png" },
    ],
    image: "/assets/shots/exdra-web.png",
    buttonColor: "#00c466",
    link: "https://exdra.click",
    status: "live",
  },
  {
    name: "Coin360 Concept",
    type: "web",
    discipline: "Trading education",
    description:
      "A focused crypto and gift-card trading platform with learning pathways for new market participants.",
    stacks: [
      { name: "Svelte", icon: "svelte.png" },
      { name: "TypeScript", icon: "ts.png" },
    ],
    image: "/assets/shots/c360c.png",
    buttonColor: "#3a061e",
    link: "https://c360concept.com",
    status: "live",
  },
  {
    name: "Eleastar",
    type: "web",
    discipline: "Company platform",
    description:
      "A corporate platform presenting Eleastar’s software practice, capabilities, and product portfolio.",
    stacks: [
      { name: "Next.js", icon: "next.png" },
      { name: "JavaScript", icon: "js.png" },
    ],
    image: "/assets/shots/eleastar.png",
    buttonColor: "#052659",
    link: "https://eleastar.com",
    status: "live",
  },
  {
    name: "Giov POS",
    type: "mobile",
    discipline: "Retail operations",
    description:
      "A handheld point-of-sale and inventory scanner that helps small retailers track products and complete sales.",
    stacks: [
      { name: "React Native", icon: "RN.png" },
      { name: "TypeScript", icon: "ts.png" },
    ],
    image: "/assets/shots/giov-screen.jpg",
    buttonColor: "#052659",
    link: "https://play.google.com/store/apps/details?id=com.fegig.giov.ecommerce&pcampaignid=web_share",
    status: "live",
  },
  {
    name: "Quizzer",
    type: "mobile",
    discipline: "Study and assessment",
    description:
      "Competitive exam preparation and trivia-based learning in a mobile system designed for repeat practice.",
    stacks: [
      { name: "React Native", icon: "RN.png" },
      { name: "Expo", icon: "expo.png" },
      { name: "TypeScript", icon: "ts.png" },
    ],
    image: "/assets/shots/quizzer-shot.png",
    buttonColor: "#052659",
    link: "https://play.google.com/store/apps/details?id=com.fegig.quizzer&pcampaignid=web_share",
    status: "live",
  },
  {
    name: "Cellus Mobile",
    type: "mobile",
    discipline: "Financial operations",
    description:
      "The mobile counterpart to Cellus, bringing bills, digital assets, and money movement into a portable workflow.",
    stacks: [
      { name: "React Native", icon: "RN.png" },
      { name: "Expo", icon: "expo.png" },
      { name: "TypeScript", icon: "ts.png" },
    ],
    image: "/assets/shots/cellus-mobile.png",
    buttonColor: "#052659",
    link: "https://cellus.app",
    status: "in-development",
  },
  {
    name: "Exdra Mobile",
    type: "mobile",
    discipline: "Group utilities",
    description:
      "A mobile-first version of Exdra’s clique payments and shared-service workflow.",
    stacks: [
      { name: "React Native", icon: "RN.png" },
      { name: "Expo", icon: "expo.png" },
      { name: "TypeScript", icon: "ts.png" },
    ],
    image: "/assets/shots/exdra-mobile.png",
    buttonColor: "#052659",
    link: "https://exdra.click",
    status: "in-development",
  },
];

export default function Projects() {
  return (
    <section className="bg-background-100 pb-28 sm:pb-36">
      <div className="site-shell">
        <div className="grid gap-x-7 gap-y-16 md:grid-cols-2">
          {projectList.map((project, index) => (
            <article
              key={project.name}
              className={index % 3 === 0 ? "md:col-span-2" : ""}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div
                  className={`relative overflow-hidden border border-white/15 bg-background-200 ${
                    index % 3 === 0 ? "aspect-[16/8]" : "aspect-[4/3]"
                  }`}
                >
                  <img
                    src={project.image}
                    alt={`${project.name} product interface`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.025]"
                  />
                  <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center bg-background-100 text-white transition group-hover:bg-color-3 group-hover:text-background-100">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
                <div className="grid gap-3 border-b border-white/15 py-5 sm:grid-cols-[1fr_auto] sm:items-start">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="text-2xl font-medium tracking-[-0.035em] text-white">
                        {project.name}
                      </h2>
                      {project.status === "in-development" ? (
                        <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-color-3">
                          Active build
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-3 max-w-2xl leading-7 text-foreground-200">
                      {project.description}
                    </p>
                  </div>
                  <p className="kicker sm:text-right">{project.discipline}</p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
