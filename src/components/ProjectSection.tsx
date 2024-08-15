import React from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { styles } from "../utils/styles";
import github from "../assets/tech/github.png";
import live from '../assets/tech/weblive.png'
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Reveal } from './Reveal';
import { Tilt } from "react-tilt";


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
  live_code_link:string;
}
const ProjectCard: React.FC<Project & { index: number }> = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[150px]'>
          <Image
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='flex-row absolute gap-1 inset-0 flex justify-end m-1'>
            <div 
              className="cursor-pointer bg-gray-600 w-10 h-10 rounded-full flex justify-center items-center ;"
              onClick={() => window.open(live_code_link, "_blank")}
            >
              <Image
                src={live}
                alt='Live'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='bg-gray-600 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <Image
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>  );
};

const ProjectSection: React.FC = () => {
  return (
    <>
      <div className="bg-[#1d1a28] text-white pl-[3.8rem]">
        <motion.div variants={textVariant(0)}>
          <Reveal>
            <h2 className={`${styles.sectionHeadText} pt-[3.8rem]`}>Projects.</h2>
          </Reveal>
        </motion.div>

        <div className='w-full flex'>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            Following projects showcase my skills and experience through
            real-world examples of my work. Each project is briefly described with
            links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
        </div>

        <div className='relative pt-5 pb-5 pl-10 flex flex-wrap gap-7'>
        {projects.map((project: Project, index: number) => (
        <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}    
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
