import {FaFacebook, FaGithub, FaLinkedinIn, FaTwitter, FaBuilding, FaPhone, FaMobileAlt} from 'react-icons/fa';

export default function Footer(){
    return(
        <footer className="px-4 divide-y primary text-white">
            <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                <div className="lg:w-1/5">
                    <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full">
                            <img alt="logo" src="./images/techfocus.png" className="h-8 w-auto" />
                        </div>
                        <span className="self-center text-2xl font-semibold">Tech Focus</span>
                    </a>
                </div>
                <div className="grid grid-cols-2 text-sm gap-x-2 gap-y-8 lg:w-4/5 sm:grid-cols-4">
                <div className="space-y-3">
                        <div className="uppercase text-white">Contact Us</div>
                        <a className="block hover:purple-700">
                                <FaBuilding className="text-white inline" /> <span className="text-white"> 3rd block, 2th street, Texax. </span>
                            </a>
                            <a className="block hover:purple-700">
                                <FaPhone className="text-white inline" /> <span className="text-white"> +19222200002 </span>
                            </a>
                            <a className="block hover:purple-700">
                                <FaMobileAlt className="text-white inline" /> <span className="text-white"> techfocus@gmail.com </span>
                            </a>
                        <div className="flex justify-start space-x-3">
                          <span className="inline flex flex-row gap-2 mt-5 justify-center text-wrap">
                                <a className="bg-gray-800 w-10 h-10 rounded-full flex justify-center items-center inline hover:bg-purple-700" target="_blank" href="https://www.linkedin.com/"> <FaLinkedinIn /> </a>
                                <a className="bg-gray-800 w-10 h-10 rounded-full flex justify-center items-center inline hover:bg-purple-700" target="_blank" href="https://github.com/"> <FaGithub /> </a>
                                <a className="bg-gray-800 w-10 h-10 rounded-full flex justify-center items-center inline hover:bg-purple-700" target="_blank" href="https://twitter.com/"> <FaTwitter /> </a>
                                <a className="bg-gray-800 w-10 h-10 rounded-full flex justify-center items-center inline hover:bg-purple-700" target="_blank" href="https://www.facebook.com/"> <FaFacebook /> </a>
                            </span> 
                        </div> 
                    </div>
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase white">Product</h3>
                        <ul className="space-y-1">
                            <li>
                                <a rel="noopener noreferrer" href="#">Features</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Pricing</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href={route("faq")}>FAQ</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase text-white">Company</h3>
                        <ul className="space-y-1">
                            <li>
                                <a rel="noopener noreferrer" href="#">Team</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Privacy</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Terms of Service</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="uppercase text-white">Services </h3>
                        <ul className="space-y-1">
                            <li>
                                <a rel="noopener noreferrer" href="#">App Development</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Hosting</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">CEO</a>
                            </li>
                        </ul>
                    </div>
                    
                </div>
             </div>
            <div className="py-6 text-sm text-center dark:text-gray-600">© 2024 TechFocus. All rights reserved.</div>
        </footer>
    )
}