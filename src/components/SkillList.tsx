import React from 'react'

export default function SkillList() {
  return (
    <section className="flex-grow flex flex-wrap bg-color-1 w-full  py-16 ">
    <div className="flex  justify-evenly items-center mx-auto my-6 flex-wrap gap-x-2 gap-y-4 max-w-screen-xl py-4">
      <div className=" my-0 mx-auto m-0 p-5 max-w-[450px]" >
        <img loading="lazy" alt="image" role="presentation" src={'assets/skill.jpg'} />
      </div>
      <div className="p-6 flex flex-col  font-medium my-0 mx-auto m-0">
        <div className="tracking-wider text-center lg:text-left text-6xl font-bold ">Taking It Up A Notch</div>
        <h2 className="max-w-2xl mt-3 text-sm text-center lg:text-left font-normal mx-auto my-2.5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad perspiciatis laudantium fugiat obcaecati quisquam beatae, adipisci itaque minus modi?
          Quibusdam autem dolor voluptas asperiores esse dicta hic odit ipsam illum?</h2>
        <div className='flex flex-col my-6'>
          <div className="flex flex-col">
            <div className='my-4 font-light text-lg'>
              Skill 1
            </div>
            <div className="w-full h-2 bg-slate-200 rounded-md">
              <div className='w-1/4 h-2 bg-green-500 rounded-md'></div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className='my-4 font-light text-lg'>
              Skill 2
            </div>
            <div className="w-full h-2 bg-slate-200 rounded-md">
              <div className='w-1/2 h-2 bg-green-500 rounded-md'></div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className='my-4 font-light text-lg'>
              Skill 3
            </div>
            <div className="w-full h-2 bg-slate-200 rounded-md">
              <div className='w-3/4 h-2 bg-green-500 rounded-md'></div>
            </div>
          </div>
        </div>
        <div className="flex lg:self-start self-center my-6">
          <a href="/hire" className="btn-primary">Hire Me</a>
        </div>

      </div>

    </div>
  </section>
  )
}
