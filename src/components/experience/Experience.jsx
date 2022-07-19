import React from 'react';
import './experience.css';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { TbBrandCss3 } from 'react-icons/tb';
import { TbBrandJavascript } from 'react-icons/tb';
import { DiBootstrap } from 'react-icons/di';
import { TbBrandTailwind } from 'react-icons/tb';
import { FaReact } from 'react-icons/fa';
import { FaPhp } from 'react-icons/fa';
import { FaLaravel } from 'react-icons/fa';
import { SiSymphony } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { FaNodeJs } from 'react-icons/fa';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiOutlineHtml5 className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <TbBrandCss3 className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <TbBrandJavascript className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <DiBootstrap className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <TbBrandTailwind className='experience__details-icon' />
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaReact className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}
        <div className="experience__backend">
        <h3>Backend Development</h3>
        <div className="experience__content">
            <article className='experience__details'>
              <FaPhp className='experience__details-icon' />
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaLaravel className='experience__details-icon' />
              <div>
                <h4>Laravel</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiSymphony className='experience__details-icon' />
              <div>
                <h4>Symfony</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaNodeJs className='experience__details-icon' />
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <GrMysql className='experience__details-icon' />
              <div>
                <h4>MYSQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
          </div>
      </div>
    </section>
  )
}

export default Experience;