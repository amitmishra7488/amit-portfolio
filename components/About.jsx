import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.gif';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            Aspiring full-stack developer skilled
            in developing responsive user
            interfaces to improve user
            satisfaction. Highly skilled at
            coordinating with cross-functional
            teams to brainstorm mock-ups.
            Adept at designing databases and
            creating the back-end of scalable
            eCommerce websites.
          </p>
          <p className='py-2 text-gray-600'>
            Highly motivated and skilled MERN stack developer with experience building scalable, full-stack web applications.
            Proficient in using the latest technologies and methodologies, including MongoDB, Express, React, and Node.js.
            Trained in full-stack web development at Masai School, where I honed my skills in both front-end and back-end development,
            as well as Agile methodologies. A quick learner with a passion for technology and a commitment to delivering high-quality,
            user-friendly solutions


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
