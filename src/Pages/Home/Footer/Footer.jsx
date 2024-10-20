import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import footerframe from '../../../assets/Frame 53.png';
import SubFooter from './SubFooter';


const Footer = () => {
    return (
        <div className=" bg-[#F0F0F0] dark:bg-gray-900 ">
            <div className='relative mt-6'>
                <div className="absolute -mt-40 w-full"><SubFooter></SubFooter></div>
                <footer className="bg-[#F0F0F0] dark:bg-gray-900 lg:pt-16 md:pt-16 pt-40 ">
                    <div className="container p-6 mx-auto">
                        <div className="lg:flex">
                            <div className="w-full -mx-6 lg:w-2/5">
                                <div className="px-6">
                                    <a href="#">
                                        <h1 className="font-extrabold text-4xl">SHOP.CO</h1>
                                    </a>
                                    <p className="max-w-sm mt-2 text-gray-500 dark:text-gray-400">
                                        We have clothes that suit your style and which you’re proud to wear. From women to men.
                                    </p>
                                    <div className="flex mt-6 -mx-2">
                                        <a href="#"
                                            className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                            aria-label="Facebook">
                                            <FontAwesomeIcon icon={faTwitter} className="w-10 h-10" />
                                        </a>
                                        <a href="#"
                                            className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                            aria-label="Twitter">
                                            <FontAwesomeIcon icon={faFacebook} className="w-10 h-10" />
                                        </a>
                                        <a href="#"
                                            className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                            aria-label="Instagram">
                                            <FontAwesomeIcon icon={faInstagram} className="w-10 h-10" />
                                        </a>
                                        <a href="#"
                                            className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                            aria-label="Github">
                                            <FontAwesomeIcon icon={faGithub} className="w-10 h-10" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 lg:mt-0 lg:flex-1">
                                <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                    <div>
                                        <h3 className="text-black uppercase dark:text-white font-semibold">Company</h3>
                                        <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">About</a>
                                        <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Features</a>
                                        <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Works</a>
                                        <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Careers</a>
                                    </div>
                                    <div>
                                        <h3 className="text-black uppercase dark:text-white font-semibold">Help</h3>
                                        <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Customer Support</a>
                                        <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Delivery Details</a>
                                        <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Terms & Conditions</a>
                                        <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Privacy Policy</a>
                                    </div>
                                    <div>
                                        <h3 className="text-black uppercase dark:text-white font-semibold">FAQ</h3>
                                        <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Account</a>
                                        <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Manage Deliveries</a>
                                        <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Orders</a>
                                        <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Payments</a>
                                    </div>
                                    <div>
                                        <h3 className="text-black uppercase dark:text-white font-semibold">RESOURCES</h3>
                                        <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Free eBooks</a>
                                        <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Development Tutorial</a>
                                        <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">How to - Blog</a>
                                        <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Youtube Playlist</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />
                        <div className="flex-col-1 lg:flex md:flex justify-between items-center mt-4">
                            <p className="text-center text-gray-500 dark:text-gray-400">© Shop.co © 2000-2023, All Rights Reserved</p>
                            <img src={footerframe} alt="Payment Methods" className="h-10" />
                        </div>
                    </div>
                </footer>
            </div>


        </div>
    );
};

export default Footer;
