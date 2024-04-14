import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';

const Presentation: React.FC = () => {
  const name = "Ben Sassi Ahmed Khalil";
  const role = "A student in computer engineering, having a double degree (Master IoT-CPS).";
  const email = "ahmed-khalil.ben-sassi@etu.univ-cotedazur.fr";
  const phoneNumber = "+33 07 69 39 25 78";
  const githubLink = "https://github.com/ahmed-Khalil404?tab=overview&from=2024-04-01&to=2024-04-09";
  const linkedinLink = "https://www.linkedin.com/in/ahmed-khalil-ben-sassi-009bbb209/";
  const cvLink = "mycv19.pdf"; // Replace with your CV file path

  return (
    <section id="presentation">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="text-5xl text-white">
            Hello, I'm <span className="text-5xl">{name}</span>.
            <br />
            <span className="block text-xl mt-2 text-white font-bold">{role}</span>
          </h1>
          <br />
          <div className="mb-8 leading-relaxed text-lg text-white">
  <p>
    Welcome to my corner of the internet! I'm Ahmed Khalil Ben Sassi, a passionate engineering student specializing in computer science and the Internet of Things (IoT). Currently enrolled in a double Master's degree program in IoT-CPS at Université Côte d'Azur, I am dedicated to exploring the intersection of technology and human-centric innovation.
  </p>

  <hr className="my-6 border-gray-300" />

  <p>
    With a solid foundation in Embedded Systems and IoT, I thrive on developing cutting-edge solutions that leverage C, C++, Python, and other programming languages. My experience spans back-end development for IoT services at Schneider Electric, where I focused on PLC communication protocols, to conducting research on human-centered security and privacy in IoT.
  </p>

  <hr className="my-6 border-gray-300" />

  <p>
    Beyond academics, I have contributed to diverse projects ranging from designing an AI-driven automated IoT ecosystem to developing an Android healthcare chat application. My journey also includes consultancy in renewable energy and graphic design roles, showcasing my versatility and commitment to interdisciplinary challenges.
  </p>

  <hr className="my-6 border-gray-300" />

  <p>
    Explore my portfolio to dive deeper into my projects and professional journey. Let's connect and collaborate on pushing the boundaries of technology together!
  </p>
</div>

          <div className="flex justify-center mt-4 space-x-4">
            <a
              href={`mailto:${email}`}
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Contact Me
            </a>
            <a
              href={`tel:${phoneNumber}`}
              className="ml-4 inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Call Me
            </a>
          </div>
          <div className="flex justify-center mt-4 space-x-4">
            {/* GitHub Icon */}
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <FaGithub className="h-10 w-10 text-white hover:text-gray-400 cursor-pointer" />
              <span className="text-sm text-white mt-1">GitHub</span>
            </a>
            {/* LinkedIn Icon */}
            <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <FaLinkedin className="h-10 w-10 text-white hover:text-blue-500 cursor-pointer" />
              <span className="text-sm text-white mt-1">LinkedIn</span>
            </a>
            {/* CV Icon */}
            <a href={cvLink} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <FaFileAlt className="h-10 w-10 text-white hover:text-purple-500 cursor-pointer" />
              <span className="text-sm text-white mt-1">CV</span>
            </a>
          </div>
        </div>
        <motion.div
          initial={{ x: 500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-center"
        >
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={`${process.env.PUBLIC_URL}/myphoto.jpg`}
            style={{ width: '80%', height: 'auto' }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Presentation;
