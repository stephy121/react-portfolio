import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa';
import { SiMongodb, SiJavascript } from 'react-icons/si';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      'Professional Coder.',
      'Full Stack Developer.',
      'Software Engineer',
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{' '}
          <span className="text-designColor capitalize">Stephy Shaju</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Experienced Software Engineer with a demonstrated history of working
          in the information technology and services industry. Exposure in
          software development lifecycle activities like business requirements
          capture, business analysis, design and development, testing,
          integration, maintenance, support, and customer interaction.
          Flexibility to learn and adapt to new tools, technologies, and
          responsibilities, good analytical and problem solving and team leading
          skills. Strong engineering professional with a Bachelor of Engineering
          focused in Computer Science from Christ Knowledge City, Kerala Working
          knowledge of Java, ASP.NET, Node JS, React, MS SQL Server, JavaScript,
          and HTML.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/stephy.shaju"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>
            <a
              href="https://instagram.com/stephysk_121"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bannerIcon">
                <FaInstagram />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/stephy-shaju-500581117/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaNodeJs />
            </span>
            <span className="bannerIcon">
              <SiMongodb />
            </span>
            <span className="bannerIcon">
              <SiJavascript />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
