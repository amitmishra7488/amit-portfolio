import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdWifiCalling } from 'react-icons/md';
import VerifiedIcon from './VerifiedIcon';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center pb-0'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            CREATING INNOVATIVE & SCALABLE SOLUTIONS
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I&#39;m <span className='text-[#5651e5]' style={{ display: 'inline-flex', alignItems: 'center' }}>Amit <VerifiedIcon /></span>
          </h1>
          <h1 className='py-2 text-gray-700'>A Passionate Software Developer</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            I specialize in building scalable, high-performance applications with modern technologies. 
            Passionate about solving complex problems and continuously learning to enhance my development skills. 
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/amit-kumar-64b0871b8/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/amitmishra7488'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <a
              href='mailto:coolamitgolu567@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </a>
            <a
              href='tel:7488078433'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <MdWifiCalling />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
