import Link from "next/link";
import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="font-jost bg-primary text-white">
            <div className="container mx-auto px-4 py-10 md:px-8 lg:px-10 xl:px-12">
                <div id='Contacts'> </div>

                <div className="flex flex-col md:flex-row items-stretch justify-between gap-6 sm:gap-8 md:mr-[10px] md:px-[-10%] md:gap-10 lg:gap-12 xl:gap-14">
                    <div className="flex-1 flex flex-col justify-center md:mr-[-25px] lg:mr-10">
                        <div className="flex flex-col items-center md:items-start mr-4 md:mr-8 lg:mr-4 mb-4">
                            <Image 
                                src="/images/shawazi-logo.png" 
                                width={400}
                                height={400}
                                alt="Shawazi Logo" 
                                className="w-[55%] max-w-[100px] mb-2 mt-10 mr-2 md:max-w-[150px] md:mr-4 lg:max-w-[150px] xl:max-w-[150px]" 
                            />
                            <h2 className="text-[25px] sm:text-[25px] md:text-[30px] font-bold text-secondary md:mr-[px] text-center">SHAWAZI</h2>
                        </div>
                    </div>
                    
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-[25px] sm:text-[30px] md:text-[30px] font-bold mb-5 text-white">Features</h1>
                        <ul className="text-[20px] sm:text-[24px] md:text-[24px] space-y-4">
                            <li><Link href="#" className="hover:text-hover transition-colors duration-300">Land Data</Link></li>
                            <li><Link href="#" className="hover:text-hover transition-colors duration-300">Secure Chat</Link></li>
                            <li><Link href="#" className="hover:text-hover transition-colors duration-300">Agreements</Link></li>
                            <li><Link href="#" className="hover:text-hover transition-colors duration-300">Transparency</Link></li>
                        </ul>
                    </div>
                    
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-[25px] sm:text-[30px] md:text-[30px] font-bold mb-5 text-white">Products</h3>
                        <ul className="text-[20px] sm:text-[24px] md:text-[24px] space-y-4">
                            <li><Link href="#" className="hover:text-hover transition-colors duration-300">Dashboard</Link></li>
                            <li><Link href="#" className="hover:text-hover transition-colors duration-300">Analytics</Link></li>
                            <li><Link href="#" className="hover:text-hover transition-colors duration-300">Reports</Link></li>
                            <li><Link href="#" className="hover:text-hover transition-colors duration-300">Support</Link></li>
                        </ul>
                    </div>
                    
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-[25px] sm:text-[30px] md:text-[30px] font-bold mb-5 text-white">About Us</h3>
                        <ul className="text-[20px] sm:text-[24px] md:text-[24px] space-y-4">
                            <li><Link href="#" className="hover:text-hover transition-colors duration-300">Mission</Link></li>
                            <li><Link href="/components/About_Us" className="hover:text-hover transition-colors duration-300">Team</Link></li>
                            <li><Link href="/components/Contacts" className="hover:text-hover transition-colors duration-300">Contacts</Link></li>
                        </ul>
                    </div>
                    
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-[25px] sm:text-[30px] md:text-[30px] font-bold mb-5 text-white">Socials</h3>
                        <ul className="text-[20px] sm:text-[24px] md:text-[24px] space-y-4">
                            <li><Link href="https://x.com/home?lang=en" className="hover:text-hover transition-colors duration-300">Twitter</Link></li>
                            <li><Link href="https://www.linkedin.com/login" className="hover:text-hover transition-colors duration-300">LinkedIn</Link></li>
                            <li><Link href="https://www.facebook.com/login.php/" className="hover:text-hover transition-colors duration-300">Facebook</Link></li>
                            <li><Link href="https://www.instagram.com/accounts/login/?hl=en" className="hover:text-hover transition-colors duration-300">Instagram</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-t border-secondary mt-8 pt-8 text-center">
                <p className="text-[14px] sm:text-[16px] md:text-[24px]">© 2024 Shawazi Inc. All rights reserved</p>
            </div>

        </footer>
    );
}

export default Footer;