import {FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter} from 'react-icons/fa';

export default function Footer(){
    return(
        <div className="primary">
             <div className="section p-20">
                <div className="grid grid-cols-3 gap-4 text-center text-white">
                    <div className="text-center">
                        <h4 className="font-bold text-xl"> services </h4>
                        <span className="mt-5">
                            <a className="hover:text-purple-700 block my-4" target="_blank" href="#"> Application Development </a>
                            <a className="hover:text-purple-700 block my-4" target="_blank" href="#"> Hosting </a>
                            <a className="hover:text-purple-700 block my-4" target="_blank" href="#"> Marketing </a>
                            <a className="hover:text-purple-700 block my-4" target="_blank" href="#"> SEO </a>
                        </span>
                    </div>
                    
                    <div className="text-center">
                        <h4 className="font-bold text-xl"> About </h4>
                        <span className="mt-5">
                            <a className="hover:text-purple-700 block my-4" target="_blank" href="#"> Team </a>
                            <a className="hover:text-purple-700 block my-4" target="_blank" href="#"> Company </a>
                        </span>
                    </div>

                    <div className="text-center">
                        <h4 className="font-bold text-xl">Contact </h4>
                        <span className="mt-5">
                            <a className="hover:text-purple-700 block my-4" target="_blank" href="#"> <span className="font-bold"> Email: </span> techfocus@info.com </a>
                            <a className="hover:text-purple-700 block my-4" target="_blank" href="#"> <span className="font-bold"> Phone: </span>: +1 910047324122 </a>
                            <a className="hover:text-purple-700 block my-4" target="_blank" href="#"> <span className="font-bold"> Address: </span>: USA, Texaz, Herat Street </a>
                        </span>
                        <span className="inline flex flex-row gap-2 mt-5 justify-center">
                            <a className="bg-gray-800 w-10 h-10 rounded-full flex justify-center items-center inline hover:bg-purple-700" target="_blank" href="https://www.linkedin.com/"> <FaLinkedinIn /> </a>
                            <a className="bg-gray-800 w-10 h-10 rounded-full flex justify-center items-center inline hover:bg-purple-700" target="_blank" href="https://github.com/"> <FaGithub /> </a>
                            <a className="bg-gray-800 w-10 h-10 rounded-full flex justify-center items-center inline hover:bg-purple-700" target="_blank" href="https://twitter.com/"> <FaTwitter /> </a>
                            <a className="bg-gray-800 w-10 h-10 rounded-full flex justify-center items-center inline hover:bg-purple-700" target="_blank" href="https://www.facebook.com/"> <FaFacebook /> </a>
                            <a className="bg-gray-800 w-10 h-10 rounded-full flex justify-center items-center inline hover:bg-purple-700" target="_blank" href="https://www.instagram.com/"> <FaInstagram /> </a>
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )
}