import React, { useState } from 'react'
import { LinkButton } from './Button';

import {Link,useNavigate} from 'react-router-dom'
import { handleUserLogout } from '../../functionsAPIs';

const Navbar = () => {

    const [dropDown, setDropDown] = useState(false);
    const navigate = useNavigate();

const User = JSON.parse(localStorage?.getItem('user'));


    const handleLogout = ()=>{
        handleUserLogout();

        navigate('/login');
    }

    return (
        <>


            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Aeonaxy</span>
                    </Link>

                    <div className="flex items-center justify-between">
                    
                    <LinkButton w='30%' col='white' title={'Home'} />

                        <div className="flex items-center cursor-pointer " onMouseEnter={() => setDropDown(true)} onMouseLeave={() => setDropDown(false)} >
                            <img
                                src={ User?.avatar ? User?.avatar : 'https://via.placeholder.com/50'}
                                alt="Admin Avatar"
                                className="w-8 h-8 rounded-full mr-2"
                            />
                            <span className="text-highlight capitalize">{User?.name ? User?.name : "User"}</span>
                        </div>
                        {dropDown &&
                            <div className="relative" onMouseEnter={() => setDropDown(true)} onMouseLeave={() => setDropDown(false)}>

                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg p-2 border z-20">
                                    <LinkButton title={' Logout'} handleClick={handleLogout} />
                                </div>
                            </div>}
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar
