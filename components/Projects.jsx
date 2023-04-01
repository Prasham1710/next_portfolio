import React from 'react'
import Image from 'next/image'
import Todo from '../public/assets/projects/Todo.png'
const Projects = () => {
  return (
    <div className='w-full'>
       <div className='max-w-[1240] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects </p>
        <h2 className='py-4'> What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
            <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
            <Image className='rounded-xl group-hover:opacity-10' src={Todo} alt='/' /> 
            <div className='hidden group-hover:block absolute'>

            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Projects