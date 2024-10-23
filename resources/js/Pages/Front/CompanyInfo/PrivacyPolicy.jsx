import React from 'react';
import Footer from '../Partial/Footer';
import FrontLayou from "@/Layouts/FrontLayout"
import Header from "../Partial/Header"
import { CheckIcon } from '@heroicons/react/20/solid'
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const PrivacyPolicy = () => {
    return (
    <>
        <Header />
         <FrontLayou>
         <section className="containerWidth relative isolate text-white">
                <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
                    <div style={{
                        clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                    />
                </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 mt-12">
                 <div className="text-center mb-16">
                    <h1 className="text-3xl font-bold mb-4">Privacy Policy for TechFocus</h1>
                    <p className="mb-4">Effective Date: 20/09/2024</p>
                 </div>
                <h2 className="text-xl font-semibold mt-6 mb-2">1. Introduction</h2>
                <p className="mb-4">
                TechFocus ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [insert website URL], use our services, or engage with us.
                </p>
                <h2 className="text-xl font-semibold mt-6 mb-2">2. Information We Collect</h2>
                <p className="mb-4">
                  We may collect personal information that you provide directly to us when you:
                </p>
                
                <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
                    <li className="flex items-center space-x-3 rtl:space-x-reverse">
                       <CheckIcon className="h-6 w-5 text-white" />
                        <span>Register for an account</span>
                    </li>
                    <li className="flex items-center space-x-3 rtl:space-x-reverse">
                        <CheckIcon className="h-6 w-5 text-white" />
                        <span>Subscribe to newsletters</span>
                    </li>
                    <li className="flex items-center space-x-3 rtl:space-x-reverse">
                        <CheckIcon className="h-6 w-5 text-white" />
                        <span>Request information or services </span>
                    </li>
                    <li className="flex items-center space-x-3 rtl:space-x-reverse">
                        <CheckIcon className="h-6 w-5 text-white" />
                        <span> Contact us via email or pho </span>
                    </li>
                </ul>

                <p className="my-6">
                  The types of personal information we may collect include:
                </p>

                <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
                    <li className="flex items-center space-x-3 rtl:space-x-reverse">
                       <CheckIcon className="h-6 w-5 text-white" />
                        <span>Name</span>
                    </li>
                    <li className="flex items-center space-x-3 rtl:space-x-reverse">
                        <CheckIcon className="h-6 w-5 text-white" />
                        <span>Email address</span>
                    </li>
                    <li className="flex items-center space-x-3 rtl:space-x-reverse">
                        <CheckIcon className="h-6 w-5 text-white" />
                        <span>Phone number</span>
                    </li>
                    <li className="flex items-center space-x-3 rtl:space-x-reverse">
                        <CheckIcon className="h-6 w-5 text-white" />
                        <span> Company name </span>
                    </li>
                </ul>
                 
                <h2 className="text-xl font-semibold mt-6 mb-2">3. How We Use Your Information</h2>
                <p className="mb-4">
                   We may use the information we collect for various purposes, including:
                </p>
                <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
                    <li className="flex items-center space-x-3 rtl:space-x-reverse">
                       <CheckIcon className="h-6 w-5 text-white" />
                        <span>To provide and maintain our services</span>
                    </li>
                    <li className="flex items-center space-x-3 rtl:space-x-reverse">
                        <CheckIcon className="h-6 w-5 text-white" />
                        <span>To improve our website and services</span>
                    </li>
                    <li className="flex items-center space-x-3 rtl:space-x-reverse">
                        <CheckIcon className="h-6 w-5 text-white" />
                        <span>To communicate with you about your account or transactions</span>
                    </li>
                    <li className="flex items-center space-x-3 rtl:space-x-reverse">
                        <CheckIcon className="h-6 w-5 text-white" />
                        <span>To send you marketing communications </span>
                    </li>
                    <li className="flex items-center space-x-3 rtl:space-x-reverse">
                        <CheckIcon className="h-6 w-5 text-white" />
                        <span>To respond to your inquiries and support requests</span>
                    </li>
                 </ul>

                <h2 className="text-xl font-semibold mt-6 mb-2">4. Sharing Your Information</h2>
                <p className="mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent, except as described in this policy. We may share your information with:
                </p>
                <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
                    <li className="flex items-center space-x-3 rtl:space-x-reverse">
                       <CheckIcon className="h-6 w-5 text-white" />
                        <span>Service providers who assist us in operating our website or conducting our business (e.g., payment processors)</span>
                    </li>
                    <li className="flex items-center space-x-3 rtl:space-x-reverse">
                        <CheckIcon className="h-6 w-5 text-white" />
                        <span>Legal authorities when required by law or to protect our rights</span>
                    </li>
                 </ul>

                <h2 className="text-xl font-semibold mt-6 mb-2">5. Data Security</h2>
                <p className="mb-4">
                  We implement reasonable security measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or method of electronic storage is 100% secure.
                </p>
                <h2 className="text-xl font-semibold mt-6 mb-2">6. Data Retention</h2>
                <p className="mb-4">
                   We will retain your personal information only for as long as necessary to fulfill the purposes for which it was collected and to comply with legal obligations.
                </p>
                <h2 className="text-xl font-semibold mt-6 mb-2">7. Your Rights</h2>
                <p className="mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
                    <li className="flex items-center space-x-3 rtl:space-x-reverse">
                       <CheckIcon className="h-6 w-5 text-white" />
                        <span>The right to access and receive a copy of your personal data.</span>
                    </li>
                    <li className="flex items-center space-x-3 rtl:space-x-reverse">
                        <CheckIcon className="h-6 w-5 text-white" />
                        <span>The right to request correction of any inaccurate data.</span>
                    </li>
                    <li className="flex items-center space-x-3 rtl:space-x-reverse">
                        <CheckIcon className="h-6 w-5 text-white" />
                        <span>The right to request deletion of your personal data.</span>
                    </li>
                    <li className="flex items-center space-x-3 rtl:space-x-reverse">
                        <CheckIcon className="h-6 w-5 text-white" />
                        <span>The right to withdraw consent at any time where we rely on consent to process your personal data. </span>
                    </li>
                 </ul>

                <h2 className="text-xl font-semibold mt-6 mb-2">8. Changes to This Privacy Policy</h2>
                <p className="mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website.
                </p>
                <h2 className="text-xl font-semibold mt-6 mb-2">9. Contact Us</h2>
                <p className="mb-4">
                   If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
                    <li className="flex items-center space-x-3 rtl:space-x-reverse">
                        <FaPhone className="text-white inline" /> 
                        <span className="text-white"> +19222200002 </span>
                    </li>
                    <li className="flex items-center space-x-3 rtl:space-x-reverse">
                       <FaEnvelope className="text-white inline" /> 
                       <span className="text-white"> techfocus@gmail.com </span>
                    </li>
                 </ul>
                 </div>
            </section>
         </FrontLayou>
        <Footer />
        </>
    );
};

export default PrivacyPolicy;