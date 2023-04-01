import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Todo from '../public/assets/projects/Todo.png'
import Bmi from '../public/assets/projects/BMI.png'
import Capture from '../public/assets/projects/Capture.png'
import Chat from '../public/assets/projects/Chat_app.png'
import Password from '../public/assets/projects/password.png'
import Travel from '../public/assets/projects/Travel_website.png'
import Data from '../public/assets/projects/data_pack.png'
import ProjectlItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'> What  Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectlItem
            title='Todo app'
            backgroundImg={Todo}
            projectUrl='https://todoapp-gules-sigma.vercel.app/'
            tech='React JS'
          />
          <ProjectlItem
            title='Capture App'
            backgroundImg={Capture}
            projectUrl='/crypto'
            tech='React JS'

          />
          <ProjectlItem
            title='Password Generator'
            backgroundImg={Password}
            projectUrl='https://password-generator-beta-black.vercel.app/'
            tech='React JS'

          />
          <ProjectlItem
            title='BMI calculator'
            backgroundImg={Bmi}
            projectUrl='https://bmi-claculator.vercel.app/'
            tech='React JS'

          />
          <ProjectlItem
            title='Data Pack '
            backgroundImg={Data}
            projectUrl='https://travel-website-pearl-six.vercel.app/'
            tech='React JS'

          
          />
          <ProjectlItem
            title='Travel Website'
            backgroundImg={Travel}
            projectUrl='https://travel-website-pearl-six.vercel.app/'
            tech='React JS'
          />
          <ProjectlItem
            title='Chat app'
            backgroundImg={Chat}
            projectUrl='/'
            tech='React JS'

          />
          
           
          
        </div>
      </div>
    </div>
  );
};

export default Projects