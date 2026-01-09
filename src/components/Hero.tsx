import React from "react";
import Stacks from "./techStack";
const Hero = () => {
    
    return ( <>
    <section className=" bg-background-100 snap-start  ">
    <div className="h-[800px] p-10  min-w-full xl:px-0 container mx-auto py-20  ">
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 justify-evenly flex-wrap relative  items-center py-2 px-0 my-0 mx-auto  max-w-screen-xl'>
          <div className="flex flex-col max-lg:order-2 order-1 max-lg:items-center col-span-1">
            <div className='font-light text-2xl text-foreground-100 ' data-aos="fade-down"   data-aos-offset="100"   data-aos-easing="linear">
              Hello, i am
            </div>
            <div className='font-bold md:text-6xl text-[34px] my-2 text-foreground-100' data-aos="fade-right"  data-aos-offset="100"   data-aos-easing="ease-in-sine">
              Oghenefegor Idoro
            </div>
            <code className=' max-w-screen-sm group'>
                <span className="frag group-hover:text-gray-700">{"<>"}</span>
                <span className="text"> I turn </span>
                <span className="frag group-hover:text-gray-700">{"<"}</span>
                <span className="component">{"Dreams"}</span>
                <span className="frag group-hover:text-gray-700">{"/>"}</span>
                <span className="text"> into </span> 
                <span className="frag group-hover:text-gray-700">{"<"}</span>
                <span className="component">{"Reality"}</span>
                <span className="frag group-hover:text-gray-700">{"/>"}</span>
                <span className="frag group-hover:text-gray-700">{" </>"}</span>
              </code>
           <Stacks/>
             
           <div className="flex justify-start mt-4">
                <a className='btn-primary text-white px-4 py-2 rounded-md text-xs' href="/assets/oghenefegor-idoro-public.pdf" target="_blank">Download My Resume</a>
              </div>
          </div>
          <div className="flex max-lg:order-1 order-2 col-span-1">
            <div  data-aos="fade-up"  className='p-8 lg:max-h-[650px] max-h-[350px] flex justify-center items-center'>
              <img src="/assets/me.svg" alt='Oghenefegor Idoro' className='object-cover h-full' />
            </div>
          </div>
       
        </div>
       
      </div>
    </section>
  </>
  );
};

export default Hero;