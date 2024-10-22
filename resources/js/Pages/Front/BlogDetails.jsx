import Footer from "./Partial/Footer"
import Header from "./Partial/Header"
import FrontLayout from "@/Layouts/FrontLayout"

export default function BlogDetails() {

  return (
    <>
        <Header />
          <FrontLayout>
            <section className="containerWidth relative isolate">
                <div aria-hidden="true"
                    className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                  >
                <div style={{
                        clipPath:
                          'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                      }}
                      className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                    />
                  </div>
                  <div className="mx-auto px-6 lg:px-8 py-16 mt-20">
                        <article className="tertiary hover:bg-purple-700 px-6 py-8 rounded-lg">
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                                        <a href="#">
                                        <span className="absolute inset-0" />
                                        Boost your conversion rate
                                        </a>
                                    </h3>
                                    <time  className="text-white">  01/11/2024 </time>
                                    <p className="mt-5 text-sm leading-6 text-white">
                                         Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.
                                         Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.
                                         </p>
                                    <p className="mt-5 text-sm leading-6 text-white"> 
                                       Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.
                                       Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.
                                       Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.
                                    </p>
                                </div>
                                <div className="mt-8">
                                   <img alt="authore" src="/images/teammember.jpg" className="h-10 w-10 rounded-full bg-gray-50" />
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold text-white">
                                            <a href="#">
                                                <span className="absolute inset-0" /> Naved Ameri
                                            </a>
                                        </p>
                                        <p className="text-white"> CEO </p>
                                    </div>
                                </div>
                            </article>
                  </div>
            </section>
          </FrontLayout>
        <Footer />
    </>
  )
}