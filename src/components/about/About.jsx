import React from 'react';
import './about.css';
import ME from '../../assets/me-about.png';
import { RiAwardLine } from 'react-icons/ri';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <RiAwardLine className='about__icon' />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Students</h5>
              <small>70+ trained</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>More than 2 years dedicated to full-stack training and with experience collaborating on projects, and correcting those of the students. <br/>
             My goal is to continue advancing and growing at a technical level, either in the framework of teaching or as a web developer.</p>
            <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;