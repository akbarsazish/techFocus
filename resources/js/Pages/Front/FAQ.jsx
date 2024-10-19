import Header from './Partial/Header'
import Footer from './Partial/Footer'
export default function FAQ(){
    return(
        <>
        <Header />
        <section className="text-white isolate py-20 tertiary">
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
            
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8 ">
                <p className="p-2 text-sm font-medium tracking-wider text-center uppercase mt-16">How it works</p>
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300">
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">Lorem ipsum dolor sit amet consectetur adipisicing elit?</summary>
                        <div className="px-4 pb-4">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque in fugiat magni, quas animi enim veritatis deleniti ex. Impedit.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">Lorem ipsum dolor sit amet consectetur adipisicing elit?</summary>
                        <div className="px-4 pb-4">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aspernatur quae, eos explicabo odit minima libero veniam similique quibusdam doloribus facilis ipsa accusantium vel maiores corrupti! Libero voluptate a doloribus?</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">Voluptatibus culpa incidunt veritatis velit quasi cupiditate unde eaque?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptates aspernatur dolores in consequatur doloremque inventore reprehenderit, consequuntur perspiciatis architecto.</p>
                            <p>Sed consectetur quod tenetur! Voluptatibus culpa incidunt veritatis velit quasi cupiditate unde eaque! Iure, voluptatibus autem eaque unde possimus quae.</p>
                        </div>
                    </details>
                </div>
            </div>
        </section>
        <Footer />
    </>
    )
}