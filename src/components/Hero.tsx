import React from "react";
import Stacks from "./techStack";
const Hero = () => {
    
    return ( <>
       <section className=" bg-color-1 w-full h-[800px] p-10 mx-auto min-w-full xl:px-0 snap-start">
        <div className='justify-evenly flex-wrap relative flex items-center py-2 px-0 my-0 mx-auto  max-w-screen-2xl'>
          <div className="flex flex-col max-lg:order-2 order-1 max-lg:items-center">
            <div className='font-light text-2xl '>
              Hello, i am
            </div>
            <div className='font-bold md:text-6xl text-[34px] my-2'>
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
             
            
          </div>
          <div className="flex max-lg:order-1 order-2">
            <div className='p-8 lg:max-h-[650px] max-h-[350px] flex justify-center items-center'>
              <img src="/assets/me.svg" alt='Oghenefegor Idoro' className='object-cover h-full' />
            </div>
          </div>
       
        </div>
      </section>
    
    </> );
}
 
export default Hero ;