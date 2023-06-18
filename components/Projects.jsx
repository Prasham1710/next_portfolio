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
import Expenses from '../public/assets/projects/Expense.png'
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
            projectUrl='/Todo'
            tech='React JS'
          />
          <ProjectlItem
            title='Capture App'
            backgroundImg={Capture}
            projectUrl='/Capture'
            tech='React JS'

          />
          <ProjectlItem
            title='Password Generator'
            backgroundImg={Password}
            projectUrl='/Password'
            tech='React JS'

          />
          <ProjectlItem
            title='BMI calculator'
            backgroundImg={Bmi}
            projectUrl='/Bmi'
            tech='React JS'

          />
          <ProjectlItem
            title='Data Pack '
            backgroundImg={Data}
            projectUrl='/Data'
            tech='React JS'
          />
          <ProjectlItem
            title='Travel Website'
            backgroundImg={Travel}
            projectUrl='/Travel'
            tech='React JS'
          />
          <ProjectlItem
            title='Chat app'
            backgroundImg={Chat}
            projectUrl='/Chat'
            tech='React JS'
          />
          <ProjectlItem
            title='Expense Tracker'
            backgroundImg={Expenses}
            projectUrl='/Expense'
            tech='React JS'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects