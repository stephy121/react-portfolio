import React from 'react';
import Title from '../layouts/Title';
import { projectOne } from '../../assets/index';
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <a href="https://stephy-mernstack-shoppie.onrender.com/">
          <ProjectsCard
            title="MERN Stack E-Commerce Website"
            des=" E-commerce website using MERN stack (MongoDB, ExpressJS, React and Node.JS)"
            src={projectOne}
          />
        </a>
      </div>
    </section>
  );
};

export default Projects;
