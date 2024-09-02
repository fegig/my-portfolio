import React from 'react'


const projectList = [
  { name: "Xattle Finance", description: "Lorem impsu trial test sverge erb bdf bdfb dfbedb sdfb gnb sfedgdfbfdgbgfb sdfgdsfbdfhb sfghdsfb f ", stacks: [{ name: "react JS", icon: "react.png" }, { name: "JS", icon: "js.png" }, { name: "TS", icon: "ts.png" },], image: "/assets/sample.png", link: "" },
  { name: "Artsfields", description: "Lorem impsu trial test sverge erb bdf bdfb dfbedb sdfb gnb sfedgdfbfdgbgfb sdfgdsfbdfhb sfghdsfb f ", stacks: [{ name: "react", icon: "react.png" }, { name: "JS", icon: "js.png" }, { name: "TS", icon: "ts.png" },], image: "/assets/sample.png", link: "" },
  { name: "Medville Engineering", description: "Lorem impsu trial test sverge erb bdf bdfb dfbedb sdfb gnb sfedgdfbfdgbgfb sdfgdsfbdfhb sfghdsfb f ", stacks: [{ name: "HTML", icon: "html.png" }, { name: "JS", icon: "js.png" }, { name: "TS", icon: "ts.png" },], image: "/assets/sample.png", link: "" },
  { name: "Estates Hub", description: "Lorem impsu trial test sverge erb bdf bdfb dfbedb sdfb gnb sfedgdfbfdgbgfb sdfgdsfbdfhb sfghdsfb f ", stacks: [{ name: "solid js", icon: "solid.png" }, { name: "TS", icon: "ts.png" }], image: "/assets/sample.png", link: "" },
  { name: "Cellus", description: "Lorem impsu trial test sverge erb bdf bdfb dfbedb sdfb gnb sfedgdfbfdgbgfb sdfgdsfbdfhb sfghdsfb f ", stacks: [{ name: "React  JS", icon: "react.png" }, { name: "React Native", icon: "RN.png" }, { name: "laravel", icon: "laravel.png" }, { name: "TS", icon: "ts.png" },], image: "/assets/sample.png", link: "" },
  { name: "Pat&Flo Limited", description: "Lorem impsu trial test sverge erb bdf bdfb dfbedb sdfb gnb sfedgdfbfdgbgfb sdfgdsfbdfhb sfghdsfb f ", stacks: [{ name: "Next JS", icon: "next.png" }, { name: "tailwind", icon: "tailwind.png" }, { name: "php", icon: "PHP.png" }, { name: "HTML", icon: "html.png" }, { name: "css", icon: "css.png" }], image: "/assets/sample.png", link: "" },
  { name: "Eleastar Tech", description: "Lorem impsu trial test sverge erb bdf bdfb dfbedb sdfb gnb sfedgdfbfdgbgfb sdfgdsfbdfhb sfghdsfb f ", stacks: [{ name: "Next JS", icon: "next.png" }, { name: "tailwind", icon: "tailwind.png" }], image: "/assets/sample.png", link: "" },

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
            {projectList.map((project, i) => (
              <div data-aos="zoom-out-up" data-aos-offset={i * 50} className='border border-primary-alt flex  max-md:flex-wrap py-4 px-4 rounded-3xl bg-primary-alt/5 backdrop-blur-md items-center' key={i}>
                <div className='flex flex-col px-2 md:px-4 py-4 space-y-4 max-md:order-2'>

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

                    <a className='btn-primary ' href={project.link} target="_blank">Visit Site</a>
                  </div>
                </div>
                <div className='space-y-4 items-center flex flex-col max-md:order-1'>

                  <div className='max-w-4xl rounded-xl'>
                    <img className='object-cover w-full rounded-2xl shadow-xl' src={project.image} alt={project.name} />
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
