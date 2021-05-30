import React from 'react';
import Logo from './Logo';
const Footer = () => {
    return (<footer className="bg-white">
        <div className="container mx-auto px-8">
            <div className="w-full flex flex-col md:flex-row py-6">
                <div className="flex-1 mb-6 text-black">
                    <a className="text-pink-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
                        <Logo />
              Samuel Guardado
            </a>
                </div>
                <div className="flex-1">
                    <p className="uppercase text-gray-500 md:mb-6">Links</p>
                    <ul className="list-reset mb-6">
                        <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Skills</a>
                        </li>
                        <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Projects</a>
                        </li>
                        <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">About me</a>
                        </li>
                    </ul>
                </div>
                <div className="flex-1">
                    <p className="uppercase text-gray-500 md:mb-6">Social</p>
                    <ul className="list-reset mb-6">
                        <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Facebook</a>
                        </li>
                        <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Linkedin</a>
                        </li>
                        <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Twitter</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>);
}

export default Footer;