import React from 'react';
import friendZone from '../public/assets/projects/friendZone.png';
import trackUs from '../public/assets/projects/homepage_track.png';
import primeVideo from '../public/assets/projects/primeVideo.png';
import lensKart from '../public/assets/projects/lenskart.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Track Us'
            backgroundImg={trackUs}
            projectUrl='/trackus'
            tech='Node Js,React JS, MongoDB, Redux'

          />
          <ProjectItem
            title='Friend Zone'
            backgroundImg={friendZone}
            projectUrl='/friendzone'
            tech='React JS, NodeJs'
          />
          <ProjectItem
            title='PrimeVideo App'
            backgroundImg={primeVideo}
            projectUrl='/primevideo'
            tech='React JS'

          />
          <ProjectItem
            title='LensKart App'
            backgroundImg={lensKart}
            projectUrl='/lenskart'
            tech='React JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
