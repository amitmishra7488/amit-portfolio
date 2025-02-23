import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.gif';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-10'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            Passionate and skilled <strong>Software Developer</strong> with experience in building scalable and efficient applications.
            Adept at developing responsive user interfaces to enhance user experience and satisfaction.
            Highly proficient in designing robust back-end systems and databases for high-performance applications.
            Skilled at collaborating with cross-functional teams to brainstorm, design, and implement innovative solutions.
          </p>
          <p className='py-2 text-gray-600'>
            Experienced in working with multiple programming languages and frameworks to develop full-stack solutions.
            Continuously learning and adapting to the latest industry trends, best practices, and emerging technologies.
            Strong problem-solving mindset with a commitment to writing clean, maintainable, and high-quality code.
            Enthusiastic about technology and always eager to take on new challenges in software development.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
