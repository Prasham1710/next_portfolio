import React from 'react'
import Image from 'next/image'
import HTML from '../public/assets/html.png'
import CSS from '../public/assets/css.png'
import Javascript from '../public/assets/javascript.png'
import Github from '../public/assets/github.png'
import Firebase from '../public/assets/firebase.png'
import Python from '../public/assets/Python.png'
import Reactjs from '../public/assets/react.png'
import Tailwind from '../public/assets/tailwind.png'
import Node from '../public/assets/node.png'
import Mongo from '../public/assets/mongo.png'
import Cplus from '../public/assets/Cplusplus.png'
import Clang from '../public/assets/clanguage.png'
import AWS from '../public/assets/aws.png'

const Skills = () => {
  return (
    <div className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image src={HTML} 
                alt="/" width='64px' height='64px' 
                /> 
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
              </div>
            </div>
            </div>
             <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image src={CSS} 
                alt="/" width='64px' height='64px' 
                /> 
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
            </div>
             <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image src={Javascript} 
                alt="/" width='64px' height='64px' 
                /> 
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>Javascript</h3>
              </div>
            </div>
            </div>
             <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image src={Reactjs} 
                alt="/" width='64px' height='64px' 
                /> 
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>React</h3>
              </div>
            </div>
            </div>
             <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image src={Tailwind} 
                alt="/" width='64px' height='64px' 
                /> 
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>Tailwind</h3>
              </div>
            </div>
            </div>
             <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image src={Python} 
                alt="/" width='64px' height='64px' 
                /> 
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>Python</h3>
              </div>
            </div>
            </div>
             <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image src={Firebase} 
                alt="/" width='64px' height='64px' 
                /> 
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>Firebase</h3>
              </div>
            </div>
            </div>
             <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image src={Github} 
                alt="/" width='64px' height='64px' 
                /> 
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>Github</h3>
              </div>
            </div>
            </div>
             <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image src={Mongo} 
                alt="/" width='64px' height='64px' 
                /> 
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>Mongo</h3>
              </div>
            </div>
            </div>
             <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image src={Node} 
                alt="/" width='64px' height='64px' 
                /> 
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>Node</h3>
              </div>
            </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image src={Cplus} 
                alt="/" width='64px' height='64px' 
                /> 
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>C++</h3>
              </div>
            </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image src={Clang} 
                alt="/" width='64px' height='64px' 
                /> 
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>C</h3>
              </div>
            </div>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Skills