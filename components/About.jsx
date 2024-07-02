import React from 'react'
import Image from 'next/image';
import Aboutp from '../public/assets/about.jpeg'
const About = () => {
  return (
    <div id ='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'> About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'> I am a Full stack WEB developer</p>
                <p className='py-2 text-gray-600'>
            I specialize in building mobile responsive web applications and website 
            that connect with APIs and other backend technologies and also macine learning enthusiast.
             I am passionate about learning new technologies
            in building full stack applications using HTML, , Tailwind ,CSS, Javascript,Typescript ,MongoDb,Prisma,
            React, NextJs,SQL, Python
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