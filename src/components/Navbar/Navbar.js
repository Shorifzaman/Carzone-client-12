import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import Fade from 'react-reveal/Fade';
import { Link, NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../image/logo.png';

const Navbar = ({ bg, textColor, width}) => {
    const [changeHeader,setChangeHeader] = useState(false);
    const [mobileNav, setMobileNav] = useState(false);
    const history = useHistory();
    const { user, signOutUser,logout } = useAuth();

    const menu = [
        { id: 1, text: 'My Bookings', to: '/my-bookings' },
        { id: 2, text: 'Car', to: '/explore' },
        { id: 3, text: 'Contact', to: '/contact' },
        { id: 4, text: 'Dashboard', to: '/dashboard' }
    ]

    //handle click 
    const handleClick = () => {
        setMobileNav(!mobileNav)
    }

    //route change 
    const handleChangeRoute = () => {
        history.push('/register')
    }

    //header scroll effect 
    const handleChangeHeader = () => {
        if(window.scrollY >=50){
            setChangeHeader(true);
        }else{
            setChangeHeader(false);
        }
    }

    window.addEventListener('scroll',handleChangeHeader)

    return (
        <header className={`${changeHeader ? "bg-blue-200" : `${bg}`} w-full  fixed top-0 left-0  z-50 transition duration-200`}>
            {/* desktop nav  */}
            <nav className={`flex items-center px-12 py-3 font-primary ${width} mx-auto`}>
                {/* brand  */}
                <div className="flex items-center flex-grow">
                    <Link to="/" className="flex items-center space-x-2">
                        <img src={logo} alt="logo" className="w-25 h-9" />
                        <h1 className={`${changeHeader ? "text-gray-800" : `${textColor}`} text-3xl font-semibold select-none font-logo`}>ZONE</h1>
                    </Link>
                </div>

                {/* menu s */}
                <div className="hidden md:flex lg:flex space-x-3">
                    {user.email && (
                  
                        <>
                            <ul className="flex items-center space-x-4">
                                {menu.map(item => (
                                    <li key={item.id} className='uppercase font-bold leading-snug text-white hover:opacity-75'>
                                        <NavLink to={item.to} className={`${changeHeader ? "text-gray-700" : `${textColor} `} text-base`}>{item.text}</NavLink>
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}

                    {/* user authentication  */}
                    {
                        user.email ? (
                            <div className="flex items-center space-x-2">
                                {/* <img src="../../../assets/profile.png" alt={user.displayName} className="w-10 h-10 rounded-full" /> */}
                                
                              {user.email ? ( <img src={user.photoURL} alt={user.displayName} className="w-10 h-10 rounded-full" />
                               ) :(
                                <span className={`${changeHeader ? "text-gray-700 uppercase leading-snug text-white hover:opacity-75" : `${textColor}`}`}>{user.displayName}</span> 
                                )} 
                                

                                <button className="bg-red-500 sm:hover:bg-red-700 rounded-md shadow w-md flex items-center justify-center px-3 py-1 border border-transparent text-base font-medium rounded-md text-white md:py-2 md:text-md md:px-4 uppercase font-bold leading-snug text-white hover:opacity-75" onClick={logout} >Logout</button>
                                {/* <button className="bg-red-500 sm:hover:bg-red-700 rounded-md shadow w-md flex items-center justify-center px-3 py-1 border border-transparent text-base font-medium rounded-md text-white md:py-2 md:text-md md:px-4 uppercase font-bold leading-snug text-white hover:opacity-75" onClick={signOutUser} >Logout</button> */}
                              
                            </div>
                            

                        ) : (
                            <>
                                <button className="bg-red-500 hover:bg-red-700 rounded-md shadow w-md flex items-center justify-center px-3 py-1 border border-transparent text-base font-medium rounded-md text-white md:py-2 md:text-md md:px-4 uppercase font-bold leading-snug text-white hover:opacity-75" onClick={handleChangeRoute}>Register</button>
                            </>
                        )
                    }

                </div>

                {/* menu icon  */}
                <div className="block md:hidden lg:hidden">
                    <HiMenuAlt3 className="w-10 h-10 ring-red-300 bg-red-500 text-white focus:ring-4 cursor-pointer rounded-lg p-2 transform transition duration-200 hover:scale-110" onClick={handleClick} />
                </div>
            </nav>

            {/* mobile nav  */}
            {mobileNav && (
                <Fade>
                    <nav className="bg-white shadow-lg mx-6 mt-2 rounded-lg border border-gray-300 py-6 block md:hidden lg:hidden">
                        <ul>
                            {menu.map(item => (
                                <NavLink key={item.id} to={item.to} className="text-gray-600 text-lg">
                                    <li className="py-2 px-3 w-full hover:bg-gray-200 transition duration-300 cursor-default">
                                        {item.text}
                                    </li>
                                </NavLink>
                            ))}
                        </ul>

                        {/* user authentication  */}
                        {
                            user.email ? (
                                <div className="flex flex-col items-center space-y-3">
                                    <img src={user.photoURL} alt={user.displayName} className="w-10 h-10 rounded-full" />
                                    <span className="text-gray-900">{user.displayName}</span>
                                    <button className="px-3 bg-red-500 sm:hover:bg-red-700 rounded-md shadow w-md flex items-center justify-center px-3 py-1 border border-transparent text-base font-medium rounded-md text-white md:py-2 md:text-md md:px-4 uppercase leading-snug text-white hover:opacity-75" onClick={signOutUser}>Logout</button>
                                </div>

                            ) : (
                                <>
                                    <div className="px-3 py-2">
                                        <button className="bg-red-500 sm:hover:bg-red-700 rounded-md shadow w-md flex items-center justify-center px-3 py-1 border border-transparent text-base font-medium rounded-md text-white md:py-2 md:text-md md:px-4 uppercase font-bold leading-snug text-white hover:opacity-75 w-full" onClick={handleChangeRoute}>Register</button>
                                    </div>
                                </>
                            )
                        }
                        {/* button  */}

                    </nav>
                </Fade>
            )}
        </header>
    )
}

export default Navbar