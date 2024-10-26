import Header from "../../Partial/Header"
import Footer from "../../Partial/Footer"
import FrontLayout from '@/Layouts/FrontLayout';
import { CheckIcon } from '@heroicons/react/20/solid'
export default function Hosting() {
  return (
    <>   
        <FrontLayout>
            <section className="relative isolate containerWidth tertiary">
                <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-32 blur-3xl">
                    <div style={{
                        clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                    />
                </div>
                <div className="flex flex-col md:flex-row pt-16 lg:pt-20">
                    <div className="w-full md:basis-2/4"> 
                        <p className="mt-2 text-4xl font-bold tracking-tight text-blue-200 sm:text-5xl">
                            Save Up to 76% Now
                        </p>
                        <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                            Fast, Reliable Web Hosting
                        </p>
                        <p className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-2xl">
                            Intelligent Website Hosting with Speed & Support
                        </p>
                        <p className="mt-4 text-white">
                            The premium hosting services you need to build a fast and successful website. Get started with web hosting in just minutes.
                        </p>

                        <div className="py-8">
                            <CheckIcon aria-hidden="true" className='h-6 w-6 p-1 flex-none bg-indigo-500 rounded-full inline mx-2 my-1'/>
                            <span className='text-white'> Free White Glove Website Migrations </span> <br />
                            <CheckIcon aria-hidden="true" className='h-6 w-6 p-1 flex-none bg-indigo-500 rounded-full inline mx-2 my-1'/>
                            <span className='text-white'> 24/7/365 In-House Guru Crew Support </span> <br />
                            <CheckIcon aria-hidden="true" className='h-6 w-6 p-1 flex-none bg-indigo-500 rounded-full inline mx-2 my-1'/>
                            <span className='text-white'> AI-Powered Performance Optimizations</span> <br />
                            <CheckIcon aria-hidden="true" className='h-6 w-6 p-1 flex-none bg-indigo-500 rounded-full inline mx-2 my-1'/>
                            <span className='text-white'> Exclusive TurboHub WordPress Control Panel </span> <br />
                        </div>
                    </div>
                    <div className="w-full md:basis-2/4 py-10">
                        <img src="./images/webHosting.jpg" alt="" />
                    </div>
                </div>
          </section>
        </FrontLayout> 
    </>
  )
}