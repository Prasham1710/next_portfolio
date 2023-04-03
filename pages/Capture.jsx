import React from 'react'
import Image from 'next/image'
import { RiRadioButtonFill } from 'react-icons/ri';
import Social from '../public/assets/projects/Capture.png'
import Link from 'next/link';
const Capture = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
       <Image
        className='absolute z-1'
        fill
        alt='/'
         style={{objectFit:"cover"}}
        src={Social}/>
       <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Capture App</h2>
          <h3>React JS / Tailwind / Firebase</h3>
        </div>
      </div>
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
            <div className='col-span-4'>
                <p>Project</p>
                <h2>Overview</h2>
                <p>
                    This is a  full-stack CURD website  It built using React js,nodejs and mongo db database is used  In this app you add your photos in the form of post other can like them .Other than this post can be edited, and it can also be delted by the one eho have uploaded it
                </p>
               <Link href= 'https://github.com/Prasham1710/capture_memo'><button className='px-8 py-2 mt-4 mr-8'>Code</button></Link> 
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
                <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1'/>React
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwindcss
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> MongoDb
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Nodejs
                 </p>
                <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Express js
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Html5
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />Material UI
                </p>
            </div>
            </div>
            </div>
            <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
        </div>
    </div>
  )
}

export default Capture