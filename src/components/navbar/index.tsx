import logo from 'assets/logo.svg'
import { NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {
    const { pathname } = useLocation()
    return (
        <div className="w-full bg-[red] h-14 z-5 px-20 md:px-5 flex justify-between items-center">
            <div>
                <img src={logo} alt="Zani Insurance"/>
            </div>
            <ul className='flex items-center justify-around h-full w-1/2 md:hidden'>
                <li className='hover:text-white'>
                    <NavLink to={'/'} className={`font-pop inline-flex text-white transition-all duration-200 ease-in text-base text-left tracking-[0.15px] ${pathname === '/' ? 'font-semibold' : 'font-normal'}`}>
                        Home
                    </NavLink>
                </li>
                <li className='hover:text-white'>
                    <NavLink to={'/about'} className={`font-pop inline-flex text-white transition-all duration-200 ease-in text-base text-left tracking-[0.15px] ${pathname === '/about' ? 'font-semibold' : 'font-normal'}`}>
                        About
                    </NavLink>
                </li>
                <li className='hover:text-white'>
                    <NavLink to={'/services'} className={`font-pop inline-flex text-white transition-all duration-200 ease-in text-base text-left tracking-[0.15px] ${pathname === '/services' ? 'font-semibold' : 'font-normal'}`}>
                        Services
                    </NavLink>
                </li>
                <li className='hover:text-white'>
                    <NavLink to={'/features'} className={`font-pop inline-flex text-white transition-all duration-200 ease-in text-base text-left tracking-[0.15px] ${pathname === '/features' ? 'font-semibold' : 'font-normal'}`}>
                        Features
                    </NavLink>
                </li>
                <li className='hover:text-white'>
                    <NavLink to={'/contact'} className={`font-pop inline-flex text-white transition-all duration-200 ease-in text-base text-left tracking-[0.15px] ${pathname === '/contact' ? 'font-semibold' : 'font-normal'}`}>
                        Contact Us
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar


// letter-spacing: 0.15000000596046448px;
// text-align: left;
