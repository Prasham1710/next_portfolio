import React from 'react'
import Image from 'next/image'
import { RiRadioButtonFill } from 'react-icons/ri';
import Todol from '../public/assets/projects/Todo.png'
import Link from 'next/link';
const Todo = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
       <Image
        className='absolute z-1'
        fill
        alt='/'
         style={{objectFit:"cover"}}
        src={Todol}/>
       <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Todo list</h2>
          <h3>React JS / Tailwind / Firebase</h3>
        </div>
      </div>
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
            <div className='col-span-4'>
                <p>Project</p>
                <h2>Overview</h2>
                <p>
                    This is a CURD app was built using React js and its hosted in vercel In this app you add your todos of  the day . Mark them completed on compleion and can be also deleted your todos are stored in it for long time as the app is using the  firebase database
                </p>
               <Link href= 'https://github.com/Prasham1710/todoapp'><button className='px-8 py-2 mt-4 mr-8'>Code</button></Link> 
                 <Link href='https://todoapp-gules-sigma.vercel.app/'><button className='px-8 py-2 mt-4'>Demo</button></Link>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
                <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1'/>React
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Firebase
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> HTML
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

export default Todo