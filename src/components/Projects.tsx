import React from 'react'


type ProjectType = {
  name: string;
  type: "web" | "mobile";
  description: string;
  stacks: { name: string; icon: string }[];
  image: string;
  buttonColor: string;
  link: string;
}

const projectList: ProjectType[] | undefined = [
  {
    name: "Cellus by Eleastar (Web) ",
    type: "web",
    description: "Cellus by Eleastar - Pay bills, stay connected, buy and sell assets, bank with Cryptocurrency and transfer cash, all in one app.",
    stacks: [{ name: "react JS", icon: "react.png" }, { name: "JS", icon: "js.png" }, { name: "TS", icon: "ts.png" },],
    image: "/assets/shots/cellus-web.png",
    buttonColor: "#052659",
    link: "https://cellus.app"
  },
  {
    name: "Exdra",
    type: "web",
    description: "Exdra offers seamless data bundles, airtime, TV subscriptions, and utility bill payments all as a family or clique package also request finance from any of your cliques.",
    stacks: [{ name: "react", icon: "react.png" }, { name: "JS", icon: "js.png" }, { name: "TS", icon: "ts.png" },],
    image: "/assets/shots/exdra-web.png",
    buttonColor: "#00c466",
    link: "https://exdra.click"
  },
  {
    name: "ootu academy",
    type: "web",
    description: "Ootu Academy is a platform for learning modern technologies meeting modern market demands all at affordable fees, connecting students to the right mentors and resources.",
    stacks: [{ name: "HTML", icon: "html.png" }, { name: "JS", icon: "js.png" }, { name: "TS", icon: "ts.png" },],
    image: "/assets/shots/ootu-academy.png",
    buttonColor: "#21181e",
    link: "https://dev.ootu.me"
  },
  {
    name: "Coin 360 Concept",
    type: "web",
    description: "Coin360 Concept - Your Simplified Crypto & Gift Card Trading Hub, and also learn fx and other trading strategies.",
    stacks: [{ name: "HTML", icon: "html.png" }, { name: "JS", icon: "js.png" }, { name: "TS", icon: "ts.png" },],
    image: "/assets/shots/c360c.png",
    buttonColor: "#3a061e",
    link: "https://c360concept.com"
  },
  {
    name: "Eleastar.com",
    type: "web",
    description: "Welcome to Eleastar Technologies Ltd official website, we are a software development company that specializes in building web and mobile applications.",
    stacks: [{ name: "solid js", icon: "solid.png" }, { name: "TS", icon: "ts.png" }],
    image: "/assets/sample.png",
    buttonColor: "#052659",
    link: "https://eleastar.com"
  },

  {
    name: "Cellus by Eleastar (Mobile)",
    type: "mobile",
    description: "Cellus is a mobile app that allows you to manage your bank using cryptocurrency and bills and services.",
    stacks: [{ name: "react Native", icon: "RN.png" }, { name: "expo", icon: "expo.png" }, { name: "typescript", icon: "ts.png" },],
    image: "/assets/sample.png",
    buttonColor: "#052659",
    link: "https://cellus.app"
  }

]
export default function Projects() {
  return (
    <section className="bg-color-1  flex w-full  py-16 px-4">
      <div className="flex  justify-evenly items-center mx-auto my-6 flex-wrap gap-x-2 gap-y-4 max-w-screen-xl py-4">
        <div className='flex-col flex items-center'>
          <div className="tracking-wider text-center lg:text-left text-4xl font-bold ">Recent Projects</div>
          <div className='text-center my-2 text-lg'>
            <blockquote className='italic'>
              "Innovation distinguishes between a leader and a follower." — <span className='text-primary-alt'>Steve Jobs</span>
            </blockquote>
          </div>
          <div className='my-4 max-w-screen-lg w-full  space-y-6'>
            {projectList?.map((project, i) => (
              <div data-aos="zoom-out-up" data-aos-offset={i * 50} className={`relative border hover:border-primary-alt/20  hover:shadow-white/20 hover:shadow-xl transition-all duration-300 flex  max-md:flex-wrap py-4 px-4 rounded-3xl bg-primary-alt/5 backdrop-blur-md items-center overflow-hidden`} key={i}>
                <div
                  className="absolute inset-0 rounded-3xl opacity-50 blur-sm"
                  style={{
                    backgroundImage: `url('${project.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                ></div>
                <div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background: 'linear-gradient(to bottom right, rgba(255, 236, 239, 0.85), rgba(255, 236, 239, 0.65), rgba(255, 236, 239, 0.85))'
                  }}
                ></div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10 items-center'>

                  <div className='flex flex-col px-2 md:px-4 py-4 space-y-4 max-md:order-2 col-span-1'>

                    <div className='font-bold text-2xl'>
                      {project.name}
                    </div>
                    <div className='text-lg'>
                      {project.description}
                    </div>
                    <div className=" flex space-x-2 my-2 flex-wrap items-center">
                      {project?.stacks?.map(stack => (
                        <div className=" w-6 mb-2" key={stack.name}>
                          <img src={"/icons/" + stack.icon} alt={stack.name} className="grayscale-0 w-full h-full  smooth hover:grayscale" />
                        </div>
                      ))}
                    </div>
                    <div className='flex' data-aos="zoom-out">

                      <a className={`backdrop-blur-sm px-4 py-2 rounded-md text-white hover:bg-transparent  `} style={{ backgroundColor: project.buttonColor }} href={project.link} target="_blank">Visit Site</a>
                    </div>
                  </div>
                  <div className='space-y-4 items-center flex flex-col max-md:order-1 col-span-1'>

                    <div className='max-w-4xl rounded-xl'>
                      <img className='object-cover w-full rounded-2xl shadow-xl' src={project.image} alt={project.name} />
                    </div>


                  </div>
                </div>
              </div>
            ))}
          </div>


        </div>
      </div>
    </section>
  )
}
