import {FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter} from 'react-icons/fa';

export default function Footer(){
    return(
        <div className="bg-gray-500 h-55">
             <div className="section p-20">
                <div className="grid grid-cols-4 gap-4 text-center text-white">
                    <div className="text-center">
                        <h4 className="font-bold text-xl"> services </h4>
                    </div>
                    <div className="text-center">
                        <h4 className="font-bold text-xl"> About </h4>
                    </div>
                    <div className="text-center">
                        <h4 className="font-bold text-xl">Contact </h4>
                        <span className="inline flex flex-row gap-2 mt-5 justify-center">
                            <a className="bg-gray-800 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer inline hover:bg-purple-700" target="_blank" href="https://www.linkedin.com/"> <FaLinkedinIn /> </a>
                            <a className="bg-gray-800 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer inline hover:bg-purple-700" target="_blank" href="https://github.com/"> <FaGithub /> </a>
                            <a className="bg-gray-800 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer inline hover:bg-purple-700" target="_blank" href="https://twitter.com/"> <FaTwitter /> </a>
                            <a className="bg-gray-800 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer inline hover:bg-purple-700" target="_blank" href="https://www.facebook.com/"> <FaFacebook /> </a>
                            <a className="bg-gray-800 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer inline hover:bg-purple-700" target="_blank" href="https://www.instagram.com/"> <FaInstagram /> </a>
                        </span>
                    </div>
                    <div className="text-center">
                        <h4 className="font-bold text-xl">Quick Link</h4>
                    </div>
                </div>
            </div>

        </div>
    )
}