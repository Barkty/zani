import logo from 'assets/logo-black.svg'
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <div className="bg-[#EFEFEF52] pt-6 px-20 md:px-6 w-full">
            <div className="grid grid-cols-4 md:grid-cols-1 border-b border-b-[#A4A4A4] w-full h-[368px] md:h-fit gap-x-10 md:gap-y-5">
                <div className='flex flex-col item-center justify-around h-5/6 mr-6 md:w-full'>
                    <img src={logo} alt="Zani Insurance"/>
                    <p className="font-pop font-normal text-base text-black text-justify md:mb-4">Zani.co ensures her customers a good insurance policy to protect them against risk inturn for regular payment of premium.</p>
                    <div className='flex w-3/6 md:w-4/6 items-center justify-between'>
                        <FaFacebook />
                        <FaTwitter />
                        <FaLinkedin />
                        <AiFillInstagram />
                    </div>
                </div>
                <div className='flex flex-col item-center justify-around h-5/6'>
                    <NavLink to={'/'} className='font-open font-semibold text-xl'>
                        Support
                    </NavLink>
                    <NavLink to={'/'} className="font-pop font-normal text-base text-black text-justify">About Us</NavLink>
                    <NavLink to={'/'} className="font-pop font-normal text-base text-black text-justify">Services</NavLink>
                    <NavLink to={'/'} className="font-pop font-normal text-base text-black text-justify">Management</NavLink>
                    <NavLink to={'/'} className="font-pop font-normal text-base text-black text-justify">Privacy Policy</NavLink>
                </div>
                <div className='flex flex-col item-center justify-around h-5/6'>
                    <NavLink to={'/'} className='font-open font-semibold text-xl'>
                        Social
                    </NavLink>
                    <NavLink to={'/'} className="font-pop font-normal text-base text-black text-justify">Facebook</NavLink>
                    <NavLink to={'/'} className="font-pop font-normal text-base text-black text-justify">Twitter</NavLink>
                    <NavLink to={'/'} className="font-pop font-normal text-base text-black text-justify">LinkedIn</NavLink>
                    <NavLink to={'/'} className="font-pop font-normal text-base text-black text-justify">Instagram</NavLink>
                </div>
                <div className='flex flex-col item-center justify-around h-5/6'>
                    <NavLink to={'/'} className='font-open font-semibold text-xl'>
                        Contact Us
                    </NavLink>
                    <NavLink to={'/'} className="font-pop font-normal text-base text-black text-justify">www.zani.co.io</NavLink>
                    <NavLink to={'/'} className="font-pop font-normal text-base text-black text-justify">Zani.co@gmail.com</NavLink>
                    <NavLink to={'/'} className="font-pop font-normal text-base text-black text-justify">Zani.co001@yahoo.com</NavLink>
                </div>
            </div>
            <div className="h-[60px] w-full flex items-center justify-center">
                <p className="font-pop font-normal text-base text-black text-center">@Zani.co {year} All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer