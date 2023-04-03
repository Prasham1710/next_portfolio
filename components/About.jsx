import React from 'react'
import Image from 'next/image';
import Aboutp from '../public/assets/profilephoto..jpeg'
const About = () => {
  return (
    <div id ='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'> About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'> I am a WEB developer</p>
                <p className='py-2 text-gray-600'>
            I specialize in building mobile responsive front-end UI applications and website 
            that connect with API’s and other backend technologies.
             I’m
            passionate about learning new technologies
            in building front-end applications using HTML, , Tailwind ,CSS, Javascript, and
            React, 
          </p>
          <p className='py-2 text-gray-600'>
            I started  learning web developement in 2022 by leanring front front end with react Now i started Leraning backend part of website with mongo DB and cloud base database like Firebase.
          </p>
         
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image className='rounded -4xl' src={Aboutp} alt='/' />
            </div>
        </div>
    </div>
  )
}

export default About