
import Footer from '../Partial/Footer';
import FrontLayou from "@/Layouts/FrontLayout"
import Header from "../Partial/Header"
export default function FAQ(){
    return(
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
            
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8 ">
                <p className="p-2 text-sm font-medium tracking-wider text-center uppercase mt-16">How it works</p>
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                <div className="flex flex-col divide-y sm:px-8 lg:px-8 xl:px-22 dark:divide-gray-300">
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">1. What services does TechFocus offer?</summary>
                        <div className="px-4 pb-4">
                          <p>TechFocus provides a wide range of services including software development, hosting solutions, SEO optimization, and marketing services. We specialize in creating custom software applications and providing cloud-based solutions.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">2. How can I contact TechFocus?</summary>
                        <div className="px-4 pb-4">
                            <p>You can reach us through our contact page on our website or by emailing us at techfocus@gmail.com. You can also call us at +19222200002.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">3. What industries does TechFocus serve?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p>We serve various industries including technology, healthcare, finance, education, and more. Our team is equipped to handle projects across multiple sectors.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">4. How do you ensure the quality of your services?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p> We follow industry best practices and utilize a rigorous testing process to ensure the quality of our software solutions. Our team is dedicated to continuous improvement and client satisfaction.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">5. What is your pricing model?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p> Our pricing varies based on the specific needs of each project. We offer competitive rates and can provide a detailed quote after discussing your requirements.</p>
                        </div>
                    </details>

                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">6. Do you provide support after project completion?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p>Yes, we offer ongoing support and maintenance services to ensure that your software continues to function optimally after deployment.</p>
                        </div>
                    </details>

                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">7. Can I request a demo of your services?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p>Absolutely! We would be happy to provide a demo of our services. Please contact us to schedule a time that works for you.</p>
                        </div>
                    </details>

                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">8. How long does it take to complete a project?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p>The timeline for project completion varies depending on the complexity and scope of the project. We will provide you with an estimated timeline during our initial discussions.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">9. What technologies do you use in your projects?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p>We utilize a variety of technologies including but not limited to JavaScript, Python, Java, AWS, Azure, and various database management systems tailored to meet the specific needs of each project.</p>
                        </div>
                    </details>

                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">10. How do you handle data privacy and security?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p>At TechFocus, we prioritize data privacy and security. We implement robust security measures and comply with relevant regulations to protect your data.</p>
                        </div>
                    </details>
                </div>
            </div>
        </section>
        </FrontLayou>
        <Footer />
    </>
    )
}