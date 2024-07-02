import React from 'react'
import hope from "../public/assets/projects/hope.jpg";
import Todo from '../public/assets/projects/Todo.png'
import Hos from '../public/assets/projects/Hos.JPG'
import Capture from '../public/assets/projects/Capture.png'
import Chat from '../public/assets/projects/Chat_app.png'
import Password from '../public/assets/projects/password.png'
import Travel from '../public/assets/projects/Travel_website.png'
import Data from '../public/assets/projects/data_pack.png'
import ProjectlItem from './ProjectItem'
import Expenses from '../public/assets/projects/Expense.png'
import bookurvilla from '../public/assets/projects/airbnb.jpg'
const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4"> What I Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectlItem
            title="Cancer Awareness Website"
            backgroundImg={hope}
            projectUrl="/Hopefullheals"
            tech="Next JS"
          />
          <ProjectlItem
            title="booking app "
            backgroundImg={bookurvilla}
            projectUrl="/Bookvilla"
            tech="Next JS"
          />

          <ProjectlItem
            title="Expense Tracker"
            backgroundImg={Expenses}
            projectUrl="/Expense"
            tech="React JS"
          />
          <ProjectlItem
            title="Todo app"
            backgroundImg={Todo}
            projectUrl="/Todo"
            tech="React JS"
          />
          <ProjectlItem
            title="Travel Website"
            backgroundImg={Travel}
            projectUrl="/Travel"
            tech="React JS"
          />
          <ProjectlItem
            title="Password Generator"
            backgroundImg={Password}
            projectUrl="/Password"
            tech="React JS"
          />
          <ProjectlItem
            title="Hospital Management"
            backgroundImg={Hos}
            projectUrl="/Hos"
            tech="Python"
          />
          <ProjectlItem
            title="Data Pack "
            backgroundImg={Data}
            projectUrl="/Data"
            tech="React JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects