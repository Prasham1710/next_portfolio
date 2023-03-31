import React from 'react'
import Image from 'next/image'
import NavLogo from '../public/assets/navLogo.png'
import Link from 'next/link'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Image 
            src={NavLogo}
            alt="/" 
            width='125'
            height='50'
        />
        <div>
            <ul className=' hidden md:flex'>
            <Link href='/'>
            <li className='ml-10 text-sm uppercase hover:border-b'>
            Home</li>
            </Link>
            <Link href='/'>
            <li className='ml-10 text-sm uppercase hover:border-b'>
            About</li>
            </Link>
            <Link href='/'>
            <li className='ml-10 text-sm uppercase hover:border-b'>
            Skills</li>
            </Link>
            <Link href='/'>
            <li className='ml-10 text-sm uppercase hover:border-b'>
            Project</li>
            </Link>
            <Link href='/'>
            <li className='ml-10 text-sm uppercase hover:border-b'>
            Contact</li>
            </Link>
        </ul>
        <div className='md:hidden'>
            <AiOutlineMenu size = {25}/>
        </div>
        </div>
        </div>
        <div className='fixed left-0 top-0 w-full h-screen bg-black/70'>
        <div className='fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f0f3]'>

        </div>

        </div>
    </div>
  )
}

export default Navbar