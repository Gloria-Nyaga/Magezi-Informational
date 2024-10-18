"use client";
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

interface HamburgerMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const HamburgerMenu = ({ isOpen, toggleMenu }: HamburgerMenuProps) => {
  return (
    <button
      onClick={toggleMenu}
      className="lg:hidden flex flex-col justify-center items-center space-y-1 z-50"
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
    >
      {isOpen ? (
        <FaTimes className="w-6 h-6 md:h-10 md:w-8 md:w-10 text-gray-800" />
      ) : (
        <FaBars className="w-6 h-6 md:h-12 md:w-8 text-gray-800" />
      )}
    </button>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();
    setMenuOpen(false);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOverlayClick = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <header className="flex flex-col md:flex-row justify-between items-center p-4 mx-auto max-w-9xl bg-white relative">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center ml-4 md:ml-12 mr-10">
          <Image
            src="/images/shawazi-logo.png"
            alt="logo"
            width={120} 
            height={40}
            className="h-[50px] w-[50px] sm:h-[20px] sm:w-[60px] md:h-[70px] md:w-[70px] lg:h-[90px] lg:w-[90px]" 
          />
        </div>
        <HamburgerMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
      </div>

      {/* Navbar for larger screens */}
      <nav className={`hidden lg:flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 md:gap-8 text-amber-950 mr-16`}>
        {[
          { href: '/', label: 'Home' },
          { href: '#Products', label: 'Products' },
          { href: '#Services', label: 'Services' },
          { href: '#About', label: 'About' },
          { href: '#Insights', label: 'Insights' },
          { href: '#Contacts', label: 'Contacts' }
        ].map(({ href, label }, index) => (
          <Link
            key={index}
            href={href}
            className={`flex items-center gap-2 text-lg sm:text-[20px] md:text-[18px] lg:text-[22px] xl:text-[25px] ${isActive(href) ? 'font-bold text-orange-500' : 'hover:text-orange-500'}`} // Responsive font sizes
            onClick={(e) => handleLinkClick(e, href.substring(1))}
          >
            {label}
          </Link>
        ))}
      </nav>

      {menuOpen && (
        <>
          <div
            id="overlay"
            className="fixed inset-0 bg-gray-900 opacity-70 z-40"
            onClick={handleOverlayClick}
          />
          <nav id="mobile-menu" className="fixed top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center bg-white bg-opacity-80 z-50 p-4 space-y-2 text-black">
            {[
              { href: '/', label: 'Home' },
              { href: '#Products', label: 'Products' },
              { href: '#Services', label: 'Services' },
              { href: '#About', label: 'About' },
              { href: '#Insights', label: 'Insights' },
              { href: '#Contacts', label: 'Contacts' }
            ].map(({ href, label }, index) => (
              <Link
                key={index}
                href={href}
                className={`flex items-center gap-2 text-lg sm:text-xl md:text-2xl lg:text-[26px] py-2 ${isActive(href) ? 'font-bold text-orange-500' : 'hover:text-orange-500'}`} // Adjusted font sizes for mobile menu
                onClick={(e) => handleLinkClick(e, href.substring(1))}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="fixed top-4 right-8 mt-5 z-50">
            <HamburgerMenu isOpen={true} toggleMenu={toggleMenu} />
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;