import Image from 'next/image';
import React from 'react';
import Javascript from '../public/assets/skills/javascript.png';
import ReactImg from '../public/assets/skills/react.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import Github from '../public/assets/skills/github1.png';
import NextJS from '../public/assets/skills/nextjs.png';
import NodeJS from '../public/assets/skills/node.png';
import Golang from '../public/assets/skills/golang.png';
import PostgreSQL from '../public/assets/skills/postgresql.png';
import MongoDB from '../public/assets/skills/mongo.png';
import Gitlab from '../public/assets/skills/gitlab.png';
import ExpressJS from '../public/assets/skills/express.png';

const Skills = () => {
  return (
    <div id='skills' className='w-full min-h-screen p-4 pb-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
        <h2 className='py-4'>What I Can Do</h2>

        {/* Backend Development */}
        <h3 className="py-2 text-gray-700 text-lg font-semibold">Backend Development</h3>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          {[
            { name: "Golang", src: Golang },
            { name: "Node.js", src: NodeJS },
            { name: "Express.js", src: ExpressJS }
          ].map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>

        {/* Frontend Development */}
        <h3 className="py-2 text-gray-700 text-lg font-semibold mt-6">Frontend Development</h3>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          {[
            { name: "React.js", src: ReactImg },
            { name: "Redux", src: Javascript },
            { name: "Next.js", src: NextJS },
            { name: "Tailwind CSS", src: Tailwind }
          ].map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>

        {/* Database Management */}
        <h3 className="py-2 text-gray-700 text-lg font-semibold mt-6">Database Management</h3>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          {[
            { name: "PostgreSQL", src: PostgreSQL },
            { name: "MongoDB", src: MongoDB }
          ].map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>

        {/* Version Control & CI/CD */}
        <h3 className="py-2 text-gray-700 text-lg font-semibold mt-6">Version Control & CI/CD</h3>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          {[
            { name: "GitHub", src: Github },
            { name: "GitLab", src: Gitlab }
          ].map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Reusable SkillCard Component
const SkillCard = ({ skill }) => {
  return (
    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
      <div className='grid grid-cols-2 gap-4 justify-center items-center'>
        <div className='m-auto'>
          <Image src={skill.src} width='64px' height='64px' alt={skill.name} />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h3>{skill.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default Skills;
