import React from "react";

// Define type for skill
type Skill = string;

const Skills: React.FC = () => {
  const embeddedSkills = [
    "C programming",
    "C++ Embedded software programming",
    "Rust",
    "Python for AI modeling and data visualization",
    "STM32 board script development",
    "ESP32 script development",
    "Raspberry Pi",
    "BeagleBone",
    "Embedded Linux",
    "Software and hardware drivers development",
    "Assembly Language",
    "VHDL",
  ];

  const softwareSkills = [
    "C#",
    ".NET Framework",
    "Java with Spring Boot",
    "ReactJS",
    "JavaScript",
    "TypeScript",
    "Jax-Rs-FastApi",
    "GraphQL",
    "Flask",
  ];

  const toolsSkills = [
    "Agile (Scrum)",
    "Figma",
    "Node-RED",
    "Grafana",
    "Altium",
    "SolidWorks",
    "Adobe Illustrator",
    "Git",
    "GitHub/GitLab",
    "SQL",
    "MongoDB",
    "Docker",
    "Azure Cloud"
  ];

  return (
    <section id="skills" className="bg-gray-900 py-10">
      <div className="container px-5 mx-auto">
      <div className="text-center mb-8">
          <img
            src={process.env.PUBLIC_URL + "/ChipIcon.png"}
            className="w-32 inline-block mb-4" 
            alt="Chip Icon"
          />
          <h1 className="text-4xl font-medium text-whute-500 mb-12">
            My Skills
          </h1>
        </div>

        {/* Embedded Systems and IoT Skills */}
        <div className="mb-8">
          <h2 className="text-lg font-medium text-green-400 mb-4">
            Embedded Systems and IoT
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {embeddedSkills.map((skill: Skill, index: number) => (
              <div
                key={index}
                className="bg-gray-800 rounded p-3 text-sm text-white flex items-center"
              >
                <div className="w-3 h-3 mr-2 bg-green-400 rounded-full"></div>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Software Development Skills */}
        <div className="mb-8">
          <h2 className="text-lg font-medium text-green-400 mb-4">
            Software Development Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {softwareSkills.map((skill: Skill, index: number) => (
              <div
                key={index}
                className="bg-gray-800 rounded p-3 text-sm text-white flex items-center"
              >
                <div className="w-3 h-3 mr-2 bg-green-400 rounded-full"></div>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering and Design Tools */}
        <div className="mb-8">
          <h2 className="text-lg font-medium text-green-400 mb-4">
            Engineering and Design Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {toolsSkills.map((skill: Skill, index: number) => (
              <div
                key={index}
                className="bg-gray-800 rounded p-3 text-sm text-white flex items-center"
              >
                <div className="w-3 h-3 mr-2 bg-green-400 rounded-full"></div>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
