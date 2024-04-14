import React from 'react';

export interface Project {
  title: string;
  description: string;
  date: string;
  location: string;
}
export interface Testimonial {
title : string; 
description: string;
file:string
}

export interface Experience {
  title: string;
  projects: Project[];
}


export const testimonials: Testimonial[] = [
  {
    title: 'Machine to Machine',
    description: 'Head of ESPRIT Universitys "Machine to Machine" research team, highly recommendsfor his diligence, management skills, and academic dedication shown',
    file: '/Testimonials/lettre de recommandation ahmed khalil.pdf',
  },
  {
    title: 'Leadership certificate ',
    description: 'Discover the remarkable impact leadership at AIESEC Bardo, Tunisia, as he spearheaded innovation and collaboration in the Incoming Global Talent Department.',
    file: '/Testimonials/CamScanner 04-09-2024 19.26 (1).pdf',
  },
  {
    title: 'Overview on Engineering Cycle',
    description: 'Responsible for engineering within the SLEAM system, specializing in embedded, ambient, and mobile software.',
    file: '/Testimonials/CamScanner 04-09-2024 19.25 (1).pdf',
  },
  {
    title: 'Renewable Energy Sustainable',
    description: 'During his internship at Participatory Development Solutions (ElMahrousa PDS), the candidate demonstrated exceptional dedication and efficiency .',
    file: '/Testimonials/CamScanner 04-09-2024 19.25.pdf',
  },
  {
    title: 'Development mobile',
    description: 'Mobile Application Development for Doctor-Patient Interactions',
    file: '/Testimonials/CamScanner 04-09-2024 19.27.pdf',
  },
  {
    title: 'Front End developer',
    description: 'Qramer front end development for interractive educational website',
    file: '/Testimonials/DX-2500N_20230728_161401.pdf',
  },

];

export const experiences: Experience[] = [
  {
    title: 'Work Experience',
    projects: [
        {
          title: 'BACK END DEVELOPER IoT',
          location: 'Schneider Electric (SAS), Carros France',
          description: `Back-end development in C# for IoT communication services at Schneider Electric, focusing on PLC communication between devices.`,
          date: '5/01/2024 - 2/2024',
        },
        {
          title: 'Research Paper: Human-centered security and privacy for IoT',
          location: 'Digital Systems for Humans, Sophia Antipolis France',
          description: `Conducted a systematic literature review (SLR) on human-centered security and privacy for IoT devices.`,
          date: '3/08/2024',
        },
        {
          title: 'Development of AI-driven Automated IoT Ecosystem (LLM)',
          location: 'Polytech Nice Sophia, Sophia Antipolis France',
          description: `Designed and developed an AI-driven automated IoT ecosystem with a custom LLM model. Integrated Node-RED for internal connections between IoT devices, sensors, and actuators, enabling natural and personalized interaction.`,
          date: '10/2023 - 2/2024',
        },
        {
          title: 'Android Backend Developer',
          location: 'HOPE HORIZON, Les Berges du Lac, Tunis',
          description: `Worked as a Back-End Developer for a mobile chat application between patients and doctors, using FastAPI in conjunction with Flutter.`,
          date: '3/04/2024 - 9/2024',
        },
        {
          title: 'LS_SAFE (RESCUE DRONE)',
          location: 'Esprit, Ariana, Tunis',
          description: `LS-Safe: An IoT drone connected to a smart belt for emergency interventions during cardiac arrest or accidents. Winner of the 2023 Project Bal competition. Details on GitHub.`,
          date: '7/2023 - 9/2023',
        },
        {
          title: 'FRONT END DEVELOPER',
          location: 'DIGICROSS, Manouba, Tunis',
          description: `Collaborated on Front-End development of an educational website with Digicross, gaining significant expertise using the React library.`,
          date: '7/2023 - 9/2023',
        },
        {
          title: 'ESPRIT BAL PROJECT',
          location: 'Qasr Ad Dobarah, New Cairo, Egypt',
          description: `Competed at Esprit Bal with a database management application in C language, utilizing the GTK interface.`,
          date: '7/2023 - 9/2023',
        },
        {
          title: 'RENEWABLE ENERGY CONSULTANT',
          location: 'ESPRIT, Ariana, Tunis',
          description: `Worked on a research project at the Mahrousa Research Center on Sustainable Development Goals (SDGs), specifically focusing on sustainable energy. Our project involved deploying small-scale solar (photovoltaic) panels.`,
          date: '7/2023 - 9/2023',
        },
        {
          title: 'GRAPHIC DESIGNER',
          location: 'HxH Electronics, Montfleury, Tunis',
          description: `Graphic Designer at HX Electric, creating posters and advertisements for national seminars.`,
          date: '7/2023 - 9/2023',
        },
      ],
  },
];


const Database: React.FC = () => {
  return null; 
};

export default Database;
