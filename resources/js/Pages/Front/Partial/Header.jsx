
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from "@inertiajs/react";


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">TechFocus</span>
              <img alt="logo" src="./images/techfocus.png" className="h-8 w-auto" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <Link href={route("home")} className="text-sm font-semibold leading-6 text-white">  Home </Link> 
            <Link href={route("services")} className="text-sm font-semibold leading-6 text-white">  Services </Link> 
            <Link href={route("about")} className="text-sm font-semibold leading-6 text-white">  About </Link> 
            <Link href={route("contact")} className="text-sm font-semibold leading-6 text-white">  Contact </Link> 
            <Link href={route("blog")} className="text-sm font-semibold leading-6 text-white">  Blog </Link> 
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                  <img alt="logo" src="./images/techfocus.png" className="h-8 w-auto" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-white"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                   <Link href={route("home")} className="text-sm font-semibold leading-6 text-white">  Home </Link> 
                   <Link href={route("services")} className="text-sm font-semibold leading-6 text-white">  Services </Link> 
                   <Link href={route("about")} className="text-sm font-semibold leading-6 text-white">  About </Link> 
                   <Link href={route("contact")} className="text-sm font-semibold leading-6 text-white">  Contact </Link> 
                   <Link href={route("blog")} className="text-sm font-semibold leading-6 text-white">  Blog </Link> 
                </div>
                <div className="py-6">
                  <a href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

  )
}
