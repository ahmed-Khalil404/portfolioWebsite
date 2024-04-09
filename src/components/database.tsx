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
    title: 'Overview on Engineering Cycle',
    description: 'Responsible for engineering within the SLEAM system, specializing in embedded, ambient, and mobile software.',
    file: '/Testimonials/CamScanner 04-09-2024 19.25 (1).pdf',
  },
  {
    title: 'Renewable Energy Sustainable',
    description: 'Development Outrich (SDO)',
    file: '/Testimonials/CamScanner 04-09-2024 19.25.pdf',
  },
  {
    title: 'Leadership certificate ',
    description: 'Being a manager(Team leader) in AIESEC Bardo',
    file: '/Testimonials/CamScanner 04-09-2024 19.26 (1).pdf',
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
  {
    title: 'Machine to Machine',
    description: 'Head of ESPRIT Universitys "Machine to Machine" research team, highly recommendsfor his diligence, management skills, and academic dedication shown',
    file: '/Testimonials/lettre de recommandation ahmed khalil.pdf',
  },
];

export const experiences: Experience[] = [
  {
    title: 'Work Experience',
    projects: [
        {
          title: 'BACK END DEVELOPER IoT',
          location: 'Schneider Electric (SAS), Carros France',
          description: `Développement back-end en C# pour les services de communication IoT chez Schneider Electric, avec focus sur la communication PLC entre dispositifs.`,
          date: '1/05/2024 - 2/2024',
        },
        {
          title: 'Research Paper: Human-centered security and privacy for IoT',
          location: 'Digital systems for humans, Sophia Antipolis France',
          description: `Réalisation d'une revue systématique de la littérature (SLR) sur la sécurité et la confidentialité centrées sur l'homme pour les appareils IoT.`,
          date: '8/03/2024',
        },
        {
          title: 'Développement d’un écosystème IoT automatisé par l\'intelligence artificielle (LLM)',
          location: 'Polytech Nice Sophia, Sophia Antipolis France',
          description: `Conception et développement d'un écosystème IoT automatisé basé sur l'intelligence artificielle avec un modèle LLM personnalisé. Intégration de Node-RED pour les connexions internes entre appareils IoT, capteurs et actionneurs, permettant une interaction naturelle et personnalisée.`,
          date: '10/2023 - 2/2024',
        },
        {
          title: 'Android Backend Developer',
          location: 'HOPE HORIZON, Les Berges du Lac, Tunis',
          description: `J’ai travaillé en tant que développeur Back-End pour une application mobile de chat entre patients et médecins, en utilisant FastAPI en conjonction avec Flutter.`,
          date: '04/03/2024 - 09/2024',
        },
        {
          title: 'LS_SAFE (DRONE DE SECOURISME)',
          location: 'Esprit, Ariana, Tunis',
          description: `LS-Safe : un drone IoT connecté à une ceinture intelligente pour interventions d'urgence en cas de crise cardiaque ou d'accident. Lauréat du Bal de projet 2023. Détails sur GitHub.`,
          date: '07/2023 - 09/2023',
        },
        {
          title: 'FRONT END DEVELOPER',
          location: 'DIGICROSS, Manouba, Tunis',
          description: `J'ai collaboré au développement Front-End d'un site Web éducatif avec Digicross, où j'ai acquis une expertise significative en utilisant la bibliothèque React.`,
          date: '07/2023 - 09/2023',
        },
        {
          title: 'PROJET BAL D’ESPRIT',
          location: 'Qasr Ad Dobarah, New Cairo, Egypt',
          description: `J'ai concouru à Esprit Bal avec une application de gestion de bases de données en langage C, exploitant l'interface GTK.`,
          date: '07/2023 - 09/2023',
        },
        {
          title: 'CONSULTANT EN ÉNERGIES RENOUVELABLES',
          location: 'ESPRIT, Ariana, Tunis',
          description: `J’ai travaillé dans un projet de recherche du Centre de Recherche Mahrousa sur les Objectifs de Développement Durable (ODD), en se concentrant spécifiquement sur l'énergie durable. Notre projet impliquait le déploiement de panneaux solaires (photovoltaïques) à petite échelle`,
          date: '07/2023 - 09/2023',
        },
        {
          title: 'CONCEPTEUR GRAPHIQUE/GRAPHIC DESIGNER',
          location: 'HxH electronics, Montfleury, Tunis',
          description: `J'ai été graphiste chez HX Electric, créant des affiches et des publicités pour les séminaires nationaux.`,
          date: '07/2023 - 09/2023',
        },
      ],
  },
];

const Database: React.FC = () => {
  return null; 
};

export default Database;
