import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Engineer"
            subTitle="Brands For Less, Dubai,UAE - (2018-2022)"
            des="Experience with e-commerce MERN Stack applications.Develop, implement, and optimize stored procedures and functions using
            T-SQL.Bug fixes, major front-end updates, and code refactoring.Working knowledge of Java, ASP.NET, Node JS, React JS, MongoDB, MS
            SQL Server, JavaScript, and HTML."
          />
          <ResumeCard
            title="Software Developer and Security Analyst"
            subTitle="Progressive Cybernetics Pvt Ltd,Kerala,India - (2017-2018)"
            des="Mentored and guided students for their Final year and Pre-final year,projects.Clearly and regularly communicate with management and technical support colleagues.Worked on JSP, JAVA, MySQL, JavaScript, HTML5 and CSS3"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
