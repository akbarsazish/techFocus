import FrontLayout from '@/Layouts/FrontLayout';
import {FaGlobe, FaMobile, FaSearch } from 'react-icons/fa';
import { FcAdvertising } from "react-icons/fc";
import { SiHostinger } from "react-icons/si";

const features = [
  {
    name: 'Web Development',
    description:
      'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
    icon: FaGlobe,
  },
  {
    name: 'Mobile Applications',
    description:
      'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
    icon: FaMobile,
  },
  {
    name: 'Hosting',
    description:
      'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
    icon: SiHostinger,
  },
  {
    name: 'Marketing',
    description:
      'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
    icon: FcAdvertising,
  },
  {
    name: 'CEO',
    description:
      'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
    icon: FaSearch,
  },
]

export default function ServicesFeature() {
  return (
    <FrontLayout>
      
    <div className="py-12 sm:py-22">
        <div className="max-w-auto">
            <div className="section p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
                <div className="mb-12">
                  <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl text-center"> Services </p>
                </div>
              
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-center text-white">
                    <div className="primary rounded h-56 -mt-10 hover:bg-purple-700">
                        <h2 className="font-bold text-2xl mt-5"> Web and Mobile App Development</h2>
                        <img className="h-auto max-w-full mx-auto p-4" src="/images/web.png" alt="web"/>
                    </div>
                    <div className="primary rounded h-56 hover:bg-purple-700">
                        <h2 className="font-bold text-2xl mt-5">Hosting </h2>
                        <img className="h-auto max-w-full mx-auto p-4" src="/images/hosting.png" alt="hosting"/>
                    </div>
                    <div className="primary rounded h-56 hover:bg-purple-700">
                        <h2 className="font-bold text-2xl mt-5">Marketing</h2>
                        <img className="h-auto max-w-full mx-auto p-4" src="/images/marketing.png" alt="marketing"/>
                    </div>
                    <div className="primary rounded h-56 -mt-10 mt-0 sm:-mt-10 hover:bg-purple-700">
                        <h2 className="font-bold text-2xl mt-5">SEO</h2>
                        <img className="h-auto max-w-full mx-auto p-4" src="/images/ceo.png" alt="ceo"/>
                    </div>
                </div>
            </div>
          </div>
          
      <div className="mx-auto max-w-7xl px-6 lg:px-8 isolate">
            <div aria-hidden="true"
                className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
              >
                <div
                  style={{
                    clipPath:
                      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                  }}
                  className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                />
              </div>
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-10 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need to empowering your business
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-white">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    </FrontLayout>
  )
}
