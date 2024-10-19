import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import Header from './Partial/Header'
import Footer from './Partial/Footer'
import FrontLayout from "@/Layouts/FrontLayout"

export default function Contact() {
 
  return (
    <>
      <Header />
      <FrontLayout>
      <section className="relative isolate containerWidth text-white">
        <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-32 blur-3xl">
          <div style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          />
        </div>
        <div className="grid max-w-6xl grid-cols-1 mx-auto md:grid-cols-2 md:divide-x my-16">
          <div className="py-6 md:py-0 md:px-6">
            <h1 className="text-4xl font-bold">Get in touch</h1>
            <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
            <div className="space-y-4">
              <p className="flex items-center">
                <FaLocationDot />
                <span className="px-2">Fake address, 9999 City</span>
              </p>
              <p className="flex items-center">
                <FaPhone />
                <span className="px-2">123456789</span>
              </p>
              <p className="flex items-center">
              <FaEnvelope />
                <span className="px-2">contact@business.com</span>
              </p>
            </div>
          </div>
          <form noValidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
            <label className="block">
              <span className="mb-1">Full name</span>
              <input type="text" placeholder="Leroy Jenkins" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
            </label>
            <label className="block">
              <span className="mb-1">Email address</span>
              <input type="email" placeholder="leroy@jenkins.com" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
            </label>
            <label className="block">
              <span className="mb-1">Message</span>
              <textarea rows="3" className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100"></textarea>
            </label>
            <button type="button" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-600 dark:text-gray-50 focus:dark:ring-violet-600 hover:dark:ring-violet-600">Submit</button>
          </form>
        </div>
      </section>
    </FrontLayout>
    <Footer />
    </>
  )
}
