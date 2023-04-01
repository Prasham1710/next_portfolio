import React from 'react'
import Todo from '../public/assets/projects/Todo.png'
import Bmi from '../public/assets/projects/BMI.png'
import Capture from '../public/assets/projects/Capture.png'
import Chat from '../public/assets/projects/Chat_app.png'

import ProjectItem from './ProjectItem'
const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'> What  Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
        <ProjectItem t
        title='Todo' 
        background={Todo} 
        projectUrl='https://todoapp-gules-sigma.vercel.app/' 
        />
        <ProjectItem t
        title='Todo' 
        background={Bmi} 
        projectUrl='https://bmi-claculator.vercel.app/' 
        />
        <ProjectItem t
        title='Todo' 
        background={Capture} 
        projectUrl='/todo' 
        />
        <ProjectItem t
        title='Todo' 
        background={Chat} 
        projectUrl='/todo' 
        />
        
        </div>
        </div>
    </div>
  )
}

export default Projects