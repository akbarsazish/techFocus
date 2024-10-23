import React from 'react';
import Footer from '../Partial/Footer';
import FrontLayou from "@/Layouts/FrontLayout"
import Header from "../Partial/Header"
import { CheckIcon } from '@heroicons/react/20/solid'
import { FaPhone, FaEnvelope } from 'react-icons/fa';


const TermsOfService = () => {
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
                    <h1 className="text-3xl font-bold mb-4">Terms of Service for TechFocus</h1>
                    <p className="mb-4">Effective Date: 20/09/2024</p>
                 </div>
            
                <h2 className="text-xl font-semibold mt-6 mb-2">1. Acceptance of Terms</h2>
                <p className="mb-4">
                    By accessing or using our services, you agree to comply with and be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our services.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">2. Services Provided</h2>
                <p className="mb-4">
                    TechFocus provides software development, hosting, SEO, and marketing services. We reserve the right to modify or discontinue any service at any time without notice.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">3. User Responsibilities</h2>
                <p className="mb-4">
                    You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to use our services only for lawful purposes and in accordance with applicable laws and regulations. You must not use our services to engage in any activity that could harm TechFocus or its users.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">4. Payment Terms</h2>
                <p className="mb-4">
                    All fees for services are due upon receipt of the invoice unless otherwise specified. We reserve the right to suspend or terminate your access to our services if payment is not received in a timely manner.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">5. Intellectual Property</h2>
                <p className="mb-4">
                    All content, trademarks, and other intellectual property associated with TechFocus and its services are owned by TechFocus or its licensors. You may not use any of our intellectual property without prior written consent.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">6. Limitation of Liability</h2>
                <p className="mb-4">
                    To the fullest extent permitted by law, TechFocus shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">7. Indemnification</h2>
                <p className="mb-4">
                    You agree to indemnify and hold harmless TechFocus, its affiliates, and their respective officers, directors, employees, and agents from any claims, losses, liabilities, damages, costs, or expenses (including reasonable attorneys' fees) arising out of your violation of these Terms or your use of our services.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">8. Changes to Terms</h2>
                <p className="mb-4">
                    We may update these Terms of Service from time to time. We will notify you of any changes by posting the new terms on our website. Your continued use of our services after changes are made constitutes acceptance of the new terms.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">9. Governing Law</h2>
                <p className="mb-4">
                    These Terms shall be governed by and construed in accordance with the laws of [Your State/Country]. Any disputes arising from these terms will be resolved in the courts located in [Your Jurisdiction].
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">10. Contact Information</h2>
                <p className="mb-4">
                    If you have any questions about these Terms of Service, please contact us at:
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

export default TermsOfService;