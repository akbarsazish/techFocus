import { FaGlobe, FaMobileAlt, FaProductHunt,FaUserFriends   } from "react-icons/fa";
import FrontLayout from "@/Layouts/FrontLayout"
export default function Statistics(){
    return (
        <>
         <FrontLayout>
         <section className="relative isolate containerWidth text-white tertiary">
            <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-32 blur-3xl">
                <div style={{
                    clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                />
            </div>
            <div className="px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4"> We always try to understand users' expectations </h1>
                  <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Techfocus is a group of software developer and IT specialist.</p>
                </div>
                <div className="flex flex-wrap -m-4 text-center">
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <FaGlobe className="text-indigo-500 w-12 h-12 mb-3 inline-block" />
                            <h2 className="title-font font-medium text-3xl">7</h2>
                            <p className="leading-relaxed">Website </p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <FaMobileAlt  className="text-indigo-500 w-12 h-12 mb-3 inline-block" />
                            <h2 className="title-font font-medium text-3xl">2</h2>
                            <p className="leading-relaxed"> Mobile Apps</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <FaProductHunt className="text-indigo-500 w-12 h-12 mb-3 inline-block" />
                            <h2 className="title-font font-medium text-3xl">4</h2>
                            <p className="leading-relaxed">Web-based Apps</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <FaUserFriends  className="text-indigo-500 w-12 h-12 mb-3 inline-block" />
                            <h2 className="title-font font-medium text-3xl">410</h2>
                            <p className="leading-relaxed">Customers</p>
                        </div>
                    </div>
                </div>
            </div>
         </section>
         </FrontLayout>
        </>
    )
}