
import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import Home from '../Home';

export default function Header() {
    const [openMenu, setOpenMenu] = useState(null); 

    const toggleMenu = (menu) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };

  return (
    <nav className="primary">
        <div className="mx-w-full px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                        <span className="absolute -inset-0.5" onClick={() => toggleMenu('mobileMenu')}></span>
                        <span className="sr-only">Open main menu</span>
                        
                        <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        
                        <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex flex-shrink-0 items-center">
                    <img className="h-8 w-auto" src="/images/techfocus.png" alt="techfocus" />
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4">
                            <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-white" aria-current="page">Home</a>
                            <Link to="/ali" element={<Home />} className="rounded-md px-3 py-2 text-sm font-medium text-white"> test </Link>
                           
                            <div className="relative inline-block text-left">
                                <div>
                                    <button type="button" onMouseEnter={() => toggleMenu('services')} className="rounded-md px-3 py-2 text-sm font-medium text-white " id="menu-button" aria-expanded="true" aria-haspopup="true">
                                     Services
                                    <svg className="-mr-1 h-5 w-5 text-gray-400 inline-block" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                    </button>
                                </div>

                                {openMenu === 'services' && (
                                <div id="servicesItems" className="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                    <div className="py-1" role="none">
                                        
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-0"> Web Application </a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-1"> Hosting </a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-2">Marketing</a>
                                    </div>
                                </div>
                                )}
                            </div>

                            <div className="relative inline-block text-left">
                                <div>
                                    <button type="button" onMouseEnter={() => toggleMenu('contact')}  className="rounded-md px-3 py-2 text-sm font-medium text-white " id="menu-button" aria-expanded="true" aria-haspopup="true">
                                    Contact Us
                                    <svg className="-mr-1 h-5 w-5 text-gray-400 inline-block" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                    </button>
                                </div>

                            {openMenu === 'contact' && (
                                <div className="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-0"> Support </a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-1"> Work With Us</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-2">Contact Us</a>
                                </div>
                            )}
                            </div>
                            <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-white">About</a>
                            <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-white">Blog</a>
                        </div>
                    </div>
                </div>

            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">View notifications</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                </button>
               </div>
            </div>
        </div>

        {openMenu === 'mobileMenu' && (
         <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
                <a href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Home</a>
                <div className="relative inline-block text-left">
                    <div>
                        <button type="button" onClick={() => toggleMenu('services')} className="rounded-md px-3 py-2 text-sm font-medium text-white " id="menu-button" aria-expanded="true" aria-haspopup="true">
                            Services
                        <svg className="-mr-1 h-5 w-5 text-gray-400 inline-block" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                        </button>
                    </div>

                    {openMenu === 'services' && (
                    <div id="servicesItems" className="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                        <div className="py-1" role="none">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-0"> Web Application </a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-1"> Hosting </a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-2">Marketing</a>
                        </div>
                    </div>
                    )}
                </div>
                <div className="relative block text-left">
                        <div>
                            <button type="button" onClick={() => toggleMenu('contact')}  className="rounded-md px-3 py-2 text-sm font-medium text-white " id="menu-button" aria-expanded="true" aria-haspopup="true">
                              Contact Us
                            <svg className="-mr-1 h-5 w-5 text-gray-400 inline-block" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                            </svg>
                            </button>
                        </div>
                    {openMenu === 'contact' && (
                        <div className="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-0"> Support </a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-1"> Work With Us</a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-2">Contact Us</a>
                        </div>
                    )}
                </div>
                <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-white">Team</a>
                <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-white">About</a>
                <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-white">Blog</a>
            </div>
        </div>
        )}
    </nav>
  );
}