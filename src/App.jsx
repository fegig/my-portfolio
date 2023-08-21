import fegig from './assets/me.svg'
import dotted from './assets/dots.svg'
function App() {
  return (
    <>

      <header className=" w-full top-0 z-50 text-white bg-color-1">

        <nav className="relative flex flex-wrap items-center p-8 mx-auto md:px-12 px-2 justify-end">
          <div className="flex px-4 items-center">
            <button className="btn-primary">Hire Me!</button>
            <div aria-label="Toggle Menu" className="buger relative w-10 h-6 bg-none appearance-none cursor-pointer  focus:outline-none mx-4">
              <span ></span>
              <span ></span>
              <span ></span>
            </div>
          </div>
        </nav>
      </header>

      <section className=" bg-color-1 w-full h-[800px] p-10 mx-auto min-w-[100%] xl:px-0">
        <div className='justify-evenly flex-wrap relative flex items-center py-2 px-0 my-0 lg:mx-0 mx-auto'>
          <div className="flex flex-col">
            <div className='font-light text-3xl '>
              Hello, i am
            </div>
            <div className='font-bold md:text-7xl text-[34px] my-2'>
              Oghenefegor Idoro
            </div>
            <div className="gap-2  hidden md:block">
              <div className='font-bold md:text-4xl my-4 text-secondary'>
                Turn Codes into Dreams
              </div>
              <div>
                <button className='btn-primary'>Download Resume</button>
              </div>
            </div>

          </div>
          <div className="flex">
            <div className='p-8'>
              <img src={fegig} alt='Oghenefegor Idoro' className='lg:max-h-[656px] max-h-[450px]' />
            </div>
          </div>
          <div className="gap-2  hidden max-md:block">
            <div className='font-bold md:text-4xl text-2xl my-4 text-secondary'>
              Turn Codes into Dreams
            </div>
            <div>
              <button className='btn-primary'>Download Resume</button>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-neutral-900 py-16 '>
        <div className='container flex flex-wrap items-center justify-center gap-3 mx-auto'>
          <div className='md:h-[400px] md:w-3 w-[400px] h-3 bg-color-1 rounded-lg mx-10'>
            <div className='md:h-1/4 h-full w-1/4 md:w-full bg-color-2 rounded-lg'> </div>
          </div>
          <div className='flex flex-col items-center justify-center gap-4 mx-10 max-h-[400px]'>
            <div className='h-[100px] w-[250px] bg-color-2 rounded-lg flex'>
              <div className='flex px-8 py-4 content-center flex-wrap items-center'>
                <div className='mr-2 w-14 h-14 bg-color-1 rounded-full text-center'>

                </div>
                <div className='font-medium text-lg text-primary'>
                  About Me
                </div>
              </div>
            </div>
            <div className='h-[100px] w-[250px] bg-neutral-800 rounded-lg flex'>
              <div className='flex px-8 py-4 content-center flex-wrap items-center'>
                <div className='mr-2 w-14 h-14 bg-color-1 rounded-full text-center'>

                </div>
                <div className='font-medium text-lg text-primary'>
                  Bio Data
                </div>
              </div>
            </div>
            <div className='h-[100px] w-[250px] bg-neutral-800 rounded-lg flex'>
              <div className='flex px-8 py-4 content-center flex-wrap items-center'>
                <div className='mr-2 w-14 h-14 bg-color-1 rounded-full text-center'>

                </div>
                <div className='font-medium text-lg text-primary'>
                  Expirences
                </div>
              </div>
            </div>
            <div className='h-[100px] w-[250px] bg-neutral-800 rounded-lg flex'>
              <div className='flex px-8 py-4 content-center flex-wrap items-center'>
                <div className='mr-2 w-14 h-14 bg-color-1 rounded-full text-center'>

                </div>
                <div className='font-medium text-lg text-primary'>
                  Passion
                </div>
              </div>
            </div>
          </div>
          <div className='md:w-[768px]'>
            <div className='flex '>
              <div className='flex flex-col bg-color-2 p-16 mx-auto rounded text-primary'>
                <div className='font-bold text-4xl '>
                  Lets Get Acquainted
                </div>
                <div className='text-xl my-4'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident eos possimus aspernatur deserunt consequuntur,
                  velit sint exercitationem doloremque quam cumque qui impedit maxime fuga commodi sed cum repellat deleniti soluta.
                </div>

              </div>
              <div className='md:self-center flex self-end md:-ml-14 max-md:absolute'>
                <img src={dotted} className='md:min-w-[150px]' />
              </div>
            </div>


          </div>

        </div>
      </section>
      <section className="flex-grow flex flex-wrap bg-color-1 w-full  py-16 ">
        <div className="flex  justify-evenly items-center mx-auto my-6 flex-wrap gap-x-2 gap-y-4 max-w-screen-xl py-4">
          <div className=" my-0 mx-auto m-0 p-5 max-w-[450px]" >
            <img loading="lazy" alt="image" role="presentation" src={'/src/assets/skill.jpg'} />
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
      <section className="bg-color-1  flex w-full  py-16">
      <div className="flex  justify-evenly items-center mx-auto my-6 flex-wrap gap-x-2 gap-y-4 max-w-screen-xl py-4">
        <div className='flex-col flex items-center'>
        <div className="tracking-wider text-center lg:text-left text-6xl font-bold ">Recent Projects</div>
      <div className='text-center my-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quod veritatis praesentium pariatur accusantium sapiente ea ipsam vero. Labore illo ipsam cupiditate assumenda iste ullam beatae sint animi quasi qui.</div>
        </div>
    
        </div>
      </section>
    </>
  )
}

export default App
