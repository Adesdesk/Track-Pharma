import Image from 'next/image'
import React from 'react'
import logo from '../public/logo1-1.png'
import { HiOutlineMoon } from "react-icons/hi";
import MobileMenu from './MobileMenu';

import { ConnectKitButton } from "connectkit";
import Link from 'next/link';

function Nav() {

    return (
        <div className='w-full h-24 bg-pharmaGreen-800'>
            <div className='flex justify-between items-center p-4 md:w-10/12 md:mx-auto'>
                <div>
                    <Image className='w-40 cursor-pointer' src={logo} alt="logo" />
                    <h6 className='font-normal p-1 cursor-pointer'>By Team201</h6>
                </div>
                <div className='hidden md:flex'>
                    <ul className='text-white flex space-x-4'>
                        <li className='font-normal p-1 cursor-pointer transition ease-linear duration-150 text-orange-400'>
                            <Link href='/'>Home</Link>
                        </li>
                        <li className='font-normal p-1 cursor-pointer'>
                            <Link href='/products'>Products</Link>
                        </li>
                        <li className='font-normal p-1 cursor-pointer'>
                            <Link href='/users'>Users</Link>
                        </li>
                        {/*<li className='font-normal p-1 cursor-pointer'>Contact</li>*/}
                    </ul>
                    <div className='ml-3'>
                        <ConnectKitButton />
                    </div>
                </div>
                <div className='md:hidden'>
                    <div className='flex items-center space-x-2 text-white'>
                        <div className='p-1 rounded-lg border border-pharmaGreen-700'>
                            <HiOutlineMoon className='text-pharmaGreen-700 cursor-pointer' size={21} />
                        </div>
                        <div className='p-1 rounded-lg border border-pharmaGreen-700'>
                            <ConnectKitButton />
                        </div>
                        <MobileMenu />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav