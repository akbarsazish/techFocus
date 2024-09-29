
import Header from './Partial/Header';
import Footer from './Partial/Footer';

export default function Home() {    
  return ( 
    <>
      <Header />
      <div className="dark:bg-gray-900">
          <div className="max-w-auto">
            <div className="flex flex-row p-20 text-white bg-[url('../../public/images/banner.jpg')] bg-no-repeat bg-cover bg-center h-screen">
                  <div className="className mt-16">
                      <h1 className="text-[44px] font-bold mb-4"> Welcome to TechFocus </h1>
                      <p className="text-xl">
                          The techFocus, utilizing advanced technology methods and the expertise of its personnel, proudly designs portals and web-based software tailored to the needs of employers.
                          An attractive user interface, high security, appropriate speed, dynamic management, and optimization for search engines are among the key priorities for professionally designing portals and web-based software.
                      </p>
                      <div className="mt-16 text-center">
                      <button className="bg-transparent hover:bg-purple-700 text-white-700 font-semibold border border-white-500 hover:text-white py-2 px-4 rounded">
                          Start With Us
                      </button>
                      </div>
                  </div>
            </div>
            <div className="section p-20">
                 <div className="mb-12">
                    <h1 className="text-3xl font-bold text-white text-center">Services</h1>
                 </div>
                <div className="grid grid-cols-4 gap-4 text-center text-white">
                    <div className="bg-indigo-900 rounded h-56 -mt-10 hover:bg-purple-700">
                        <h2 className="font-bold text-2xl mt-5"> Web and Mobile App Development</h2>
                    </div>
                    <div className="bg-indigo-900 rounded h-56 hover:bg-purple-700">
                        <h2 className="font-bold text-2xl mt-5">Hosting </h2>
                    </div>
                    <div className="bg-indigo-900 rounded h-56 hover:bg-purple-700">
                        <h2 className="font-bold text-2xl mt-5">Marketing</h2>
                    </div>
                    <div className="bg-indigo-900 rounded h-56 -mt-10 hover:bg-purple-700">
                        <h2 className="font-bold text-2xl mt-5">SEO</h2>
                    </div>
                </div>
            </div>
          </div>
      </div>
      <Footer/>
    </>
  )
}