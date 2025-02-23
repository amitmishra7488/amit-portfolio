import Image from 'next/image';
import React from 'react';
import trackUsImage from '../public/assets/projects/expense_track.png'; // Replace with the actual image
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const trackus = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={trackUsImage}
          alt='Track_Us'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Track_Us</h2>
          <h3>MERN Stack (MongoDB / Express / React / Node.js)</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Track_Us is a finance tracking application that helps users monitor their expenses, set financial goals, and manage their investment portfolio efficiently. 
            The app provides secure authentication with encrypted passwords, and users can access protected routes using JWT-based authentication.
            Built with the MERN stack, Track_Us ensures a seamless experience with a responsive frontend and a robust backend API.
            The platform also includes advanced filtering & sorting, allowing users to easily organize their financial records.
          </p>
          <a
            href='https://github.com/amitmishra7488/track_us' 
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://track-us-frontend.vercel.app/' 
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
        </div>

        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies Used</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              {[
                "React.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Redux",
                "JWT Authentication",
                "Bcrypt.js",
                "Tailwind CSS",
                "Vercel Deployment",
                "GitHub"
              ].map((tech, index) => (
                <p key={index} className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> {tech}
                </p>
              ))}
            </div>
          </div>
        </div>

        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default trackus;
