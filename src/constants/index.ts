
import SirArslan from './Images Senior/Arslan.jpg';
import SirTalha from './Images Senior/Talha.jpg';
import SirUsama from './Images Senior/Usama.jpg';
import { StaticImageData } from 'next/image';

interface Testimonial {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}

interface Tag {
  name: string;
  color: string;
}

interface Project {
  name: string;
  description: string;
  tags: Tag[];
  image: StaticImageData;
  source_code_link: string;
}

const testimonials: Testimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "M. Arslan",
    designation: "Full Stack Engineer",
    company: "eFAIDA Technologies",
    image: `${SirArslan}`,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Talha Hashmi",
    designation: "Technical Project Manager",
    company: "eFAIDA Technologies",
    image: `${SirTalha}`,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Usama",
    designation: "Business Analyst",
    company: "NetBridge Ltd.",
    image: `${SirUsama}`,
  },
];

import waltford from '../assets/project/watford.png';
import portfolio from '../assets/project/portfolio.png';
import zps from '../assets/project/zps.png'
const projects: Project[] = [
  {
    name: "Waltford LLC.",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "framermotion",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: waltford,
    source_code_link: "https://github.com/AliGates915/WatfordLLC_Crypto",
  },
  {
    name: "ZPS Online Services",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "mongo",
        color: "pink-text-gradient",
      },
    ],
    image: zps,
    source_code_link: "https://github.com/",
  },
  {
    name: "3D Portfolio",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/",
  },
];

export {testimonials, projects };
