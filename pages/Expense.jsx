
import React from 'react'
import Image from 'next/image'
import { RiRadioButtonFill } from 'react-icons/ri';
import Expenses from '../public/assets/projects/Expense.png' 
import Link from 'next/link';
const Expense = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
       <Image
        className='absolute z-1'
        fill
        alt='/'
         style={{objectFit:"cover"}}
        src={Expenses}/>
       <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Expense tracker</h2>
          <h3>React JS / Tailwind </h3>
        </div>
      </div>
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
            <div className='col-span-4'>
                <p>Project</p>
                <h2>Overview</h2>
                <p>
                    This is full stack project in which you can note your Expenses and incomes and can be viewed in a chart form.
                </p>
               <Link href= 'https://github.com/Prasham1710/expense_tracker'><button className='px-8 py-2 mt-4 mr-8'>Code</button></Link> 
                <Link  href='/'><button className='px-8 py-2 mt-4'>Demo</button></Link>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
                <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1'/>React
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />CSS3
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
                </p>
                 <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> html5
                </p>
                 <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> MongoDb
                </p>
                 <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> express js
                </p>
                 <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> node js
                </p>
                 <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> chart js
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

export default Expense