import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor of Technology in Computer Science and Engineering"
            subTitle="Christ Knowledge City (CKC) (2013 - 2017)"
            des="Completed with 7.15 CGPA"
          />
          <ResumeCard
            title="Higher Secondary Education- 12th Grade"
            subTitle="ST Mary's HSS (2011-2013)"
            des="Completed with 79%"
          />
          <ResumeCard
            title="SSLC- 10th Grade"
            subTitle="ST Antonys CHS(2011)"
            des="Completed with 82%"
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
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

export default Education;
