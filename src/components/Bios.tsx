import React, { useEffect, useState } from 'react'

export default function Bios() {
    const biosInfo = [
        {
          id: 1,
          name: "About Me",
          description: "I'm Oghenefegor Idoro, a passionate Web and Mobile Native Frontend Developer and Graphics Designer with a knack for creating intuitive and user-friendly digital experiences. With a strong foundation in programming and design, I thrive in dynamic environments where creativity and innovation are key.",
          icon: "fi-rr-info",
          color: "bg-color-2"
        },
        {
          id: 2,
          name: "Skills",
          description: "Proficient in HTML5, CSS, JavaScript, React, React Native, Next.js, Solid JS, PHP, MySQL, and Adobe Photoshop. Experienced in responsive web design, UI/UX design, and debugging. I have a strong background in SEO, REST API integration, and data analysis.",
          icon: "fi-rr-id-card-clip-alt",
          color: "bg-orange-500"
        },
        {
          id: 3,
          name: "Experience",
          description: "With over 8 years of experience, I've worked as a Frontend Developer at Eleastar Technologies, a Web Developer/IT Officer at PAT AND FLO LIMITED, and more. I've built enterprise applications, websites, and internal tools using modern technologies and frameworks.",
          icon: "fi-rr-flask-potion",
          color: "bg-green-500"
        },
        {
          id: 4,
          name: "Education",
          description: "I hold a Bachelor's Degree in Mathematics from Delta State University and a National Diploma from Delta State Polytechnic. I have also completed specialized courses in Quality Assurance, Secure Software Testing, and PHP.",
          icon: "fi-rr-graduation-cap",
          color: "bg-sky-500"
        },
        {
          id: 5,
          name: "Passion",
          description: "I'm passionate about leveraging technology to solve real-world problems and improve user experiences. I love creating interactive and visually appealing web and mobile applications and am constantly exploring new technologies to enhance my skills.",
          icon: "fi-rr-fire-flame-curved",
          color: "bg-purple-500"
        }
      ];
      

    const [ActiveBios, setActiveBios] = useState<number>(1)
    const [progress, setProgress] = useState<number>(100 / biosInfo?.length)

    const activeBiosInfo = biosInfo.find((bios) => bios.id === ActiveBios);
    const activeColor = activeBiosInfo ? activeBiosInfo.color : null;

    useEffect(() => {
        if (activeBiosInfo) {
            const w = activeBiosInfo.id * 100 / biosInfo.length;
            console.log("w", w);
            setProgress(w);
        }
    }, [activeBiosInfo]);

    return (
        <section className='bg-neutral-900 lg:py-16 pt-10 snap-start'>
            <div className='container flex flex-wrap items-center justify-evenly space-y-2 mx-auto'>
              <div className='flex justify-between items-center flex-wrap max-w-screen-sm max-md:container space-y-2 '>
                <div className={`md:h-[400px] md:w-3 w-[400px] h-3 bg-color-1 rounded-lg mx-10`}>
                    <div className={`md:h-1/4 h-full w-1/4 md:w-full max-md:hidden ${activeColor} rounded-lg smooth`} style={{ height: `${progress}%` }} />
                    <div className={`md:h-1/4 h-full w-1/4 md:hidden   ${activeColor} rounded-lg smooth`} style={{ width: `${progress}%` }} />
                </div>
                <div className='flex md:flex-col items-center justify-evenly md:space-y-4 flex-wrap'>
                    {
                        biosInfo.map((bios) => {

                            return (
                                <div className={`max-md:mb-2 h-20 md:w-52 w-40 ${ActiveBios === bios.id ? bios.color : "bg-neutral-800"} rounded-lg flex smooth`} key={bios.id} onClick={() => setActiveBios(bios.id)}>
                                    <div className='flex px-4 py-4 content-center flex-wrap items-center'>
                                        <div className={`mr-2 md:w-14 md:h-14 h-10 w-10 ${ActiveBios !== bios.id ? bios.color + " text-primary" : "bg-color-1 text-neutral-800"} rounded-full text-center flex items-center justify-center smooth`}>
                                            <i className={`fi ${bios.icon} flex justify-center items-center text-2xl max-md:text-base`}></i>
                                        </div>
                                        <div className='font-medium text-lg text-primary max-md:text-sm'>
                                            {bios.name}
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }

                </div>
                </div>

                <div className='md:w-[768px]'>
                    <div className='flex '>
                        <div className={`flex flex-col ${activeColor} p-16 mx-auto rounded text-primary smooth`}>
                            <div className='font-bold text-4xl smooth'>
                                {activeBiosInfo?.name}
                            </div>
                            <div className='text-xl my-4 smooth'>
                                {activeBiosInfo?.description}
                            </div>


                        </div>
                        <div className='md:self-center flex self-end md:-ml-14 max-md:absolute'>
                            <img src='/assets/dots.svg' className='md:min-w-[150px]' />
                        </div>
                    </div>


                </div>

            </div>
        </section>
    )
}
