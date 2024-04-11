import React from 'react';
import { experiences, Experience, Project } from './database';

const Experiences: React.FC = () => {
  return (
    <section id="experiences" className="text-white bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-left lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-5xl text-6xl font-bold title-font mb-4 text-center text-green-400">
            Work Experience
          </h1>
        </div>
        <div className="text-left">
          {experiences.map((experience: Experience, index: number) => (
            <div key={index} className="mb-8">
              {experience.projects.map((project: Project, projIndex: number) => (
                <div key={projIndex} className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-3xl font-bold text-green-400">{project.title}</h2>
                    <p className="text-base text-white">{project.date}</p>
                  </div>
                  <p className="text-base text-white mb-2">{project.location}</p>
                  <p className="text-base text-white">{project.description}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
