
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

import waltford from '../assets/project/watford.png';
import portfolio from '../assets/project/portfolio.png';
import zps from '../assets/project/zps.png'
const projects: Project[] = [
  {
    name: "Waltford LLC.",
    description:
      "As a Frontend Developer, I’m developing the Watford LLC website using Next.js, Framer Motion, and Tailwind CSS. I used the CoinGecko API to display coin prices in various currencies. I implemented login functionality, compared trading options, and enabled the buying and selling of coins.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
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
      "ZPS Online Graphics Services used React.js and TypeScript on the front end alongside Tailwind CSS. Users can easily upload and download templates, accessing a variety of graphic design services. On the backend, Node.js ensures secure file handling. Available Admin Panel.",
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
    source_code_link: "https://github.com/AliGates915/Zahid-Printing-Service",
  },
  {
    name: "3D Portfolio",
    description:
      "I developed a dynamic and visually engaging 3D Portfolio website to showcase my skills and projects. Utilizing React.js for its robust performance.  Framer Motion and Three.js were integrated to create captivating animations. Tailwind CSS allowed me to style the site efficiently and responsively.",
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
    source_code_link: "https://github.com/AliGates915/3D-Personal-Portfolio",
  },
];

export {projects };
