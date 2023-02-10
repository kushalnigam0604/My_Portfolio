import React from 'react';
import './About.css';
import myImage from '../../assets/myImage.jpg';
import { FaAward } from 'react-icons/fa';
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
            <img src={myImage} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
            <FaAward className='about__icon'/>
            <h4>Experience</h4>
            <small>1+ year working</small>
            </article>
            <article className="about__card">
            <FiUsers className='about__icon'/>
            <h4>Clients</h4>
            <small>Worked with 3 Clients</small>
            </article>
            <article className="about__card">
            <VscFolderLibrary className='about__icon'/>
            <h4>Projects</h4>
            <small>10+ Projects</small>
            </article>
          </div>
          <p>Experienced Software Engineer with a demonstrated history of working in the software development industry. I enjoy learning new technology, doing programming, analyzing and fixing issues, and making new things.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About

