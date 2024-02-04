import logo from 'assets/logo.svg'
import { useState } from 'react';
import { FaRegTimesCircle } from "react-icons/fa";
import { AiOutlineMenu } from 'react-icons/ai';
import { useLocation } from 'react-router-dom'
import { HashLink as NavLink } from 'react-router-hash-link';

const Navbar = () => {
    const { pathname } = useLocation()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    
    return (
        <div className="w-full bg-inherit h-14 px-20 md:px-5 flex justify-between items-center relative top-9 left-0 right-0 z-10">
            <div>
                <img src={logo} alt="Zani Insurance"/>
            </div>
            <ul className='flex items-center justify-around h-full w-1/2 md:hidden'>
                <li className='hover:text-white'>
                    <NavLink smooth to={'/'} className={`font-pop inline-flex text-white transition-all duration-200 ease-in text-base text-left tracking-[0.15px] ${pathname === '/' ? 'font-semibold' : 'font-normal'}`}>
                        Home
                    </NavLink>
                </li>
                <li className='hover:text-white'>
                    <NavLink smooth to={'/#about'} className={`font-pop inline-flex text-white transition-all duration-200 ease-in text-base text-left tracking-[0.15px] ${pathname === '/about' ? 'font-semibold' : 'font-normal'}`}>
                        About
                    </NavLink>
                </li>
                <li className='hover:text-white'>
                    <NavLink smooth to={'/#services'} className={`font-pop inline-flex text-white transition-all duration-200 ease-in text-base text-left tracking-[0.15px] ${pathname === '/services' ? 'font-semibold' : 'font-normal'}`}>
                        Services
                    </NavLink>
                </li>
                <li className='hover:text-white'>
                    <NavLink smooth to={'/#features'} className={`font-pop inline-flex text-white transition-all duration-200 ease-in text-base text-left tracking-[0.15px] ${pathname === '/features' ? 'font-semibold' : 'font-normal'}`}>
                        Features
                    </NavLink>
                </li>
                <li className='hover:text-white'>
                    <NavLink smooth to={'/#contact'} className={`font-pop inline-flex text-white transition-all duration-200 ease-in text-base text-left tracking-[0.15px] ${pathname === '/contact' ? 'font-semibold' : 'font-normal'}`}>
                        Contact Us
                    </NavLink>
                </li>
            </ul>
            {/* Mobile Menu Toggle Button */}
            <div className="hidden md:block z-10">
                <button
                onClick={toggleMobileMenu}
                className={`${isMobileMenuOpen ? 'text-black' : 'text-white'} focus:outline-none`}
                >
                    {isMobileMenuOpen ? <FaRegTimesCircle size={24}/> : <AiOutlineMenu size={24}/>}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute left-0 right-0 -top-9 flex-col bg-white border-b border-gray-200 mlg:hidden md:flex h-screen pt-10 pl-4">
                    <ul className="flex flex-col items-center p-4 space-y-3 h-full pt-10">
                        <li className='w-full h-[59px]'>
                            <NavLink className={"py-1 px-2 font-medium text-base text-[rgba(0, 2, 73, 1)] font-open"} to={"/"}>
                                Home
                            </NavLink>
                        </li>
                        <li className='w-full h-[59px]'>
                            <NavLink className={"py-1 px-2 font-medium text-base text-[rgba(0, 2, 73, 1)] font-open"} to={"/#about"}>
                                About
                            </NavLink>
                        </li>
                        <li className='w-full h-[59px]'>
                            <NavLink className={"py-1 px-2 font-medium text-base text-[rgba(0, 2, 73, 1)] font-open"} to={"/#services"}>
                                Services
                            </NavLink>
                        </li>
                        <li className='w-full h-[59px]'>
                            <NavLink className={"py-1 px-2 font-medium text-base text-[rgba(0, 2, 73, 1)] font-open"} to={"/#features"}>
                                Features
                            </NavLink>
                        </li>
                        <li className='w-full h-[59px]'>
                            <NavLink className={"py-1 px-2 font-medium text-base text-[rgba(0, 2, 73, 1)] font-open"} to={"/#contact"}>
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Navbar


// letter-spacing: 0.15000000596046448px;
// text-align: left;
