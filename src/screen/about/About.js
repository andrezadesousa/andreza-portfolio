import React from 'react'
import './Style.css'
import aboutMe from '../../assets/svg/aboutMe.svg'
import { SectionTitle } from '../../components/Titles/SectionTitle/index'
import { SectionSubtitle } from '../../components/Titles/SectionSubtitle'
import {Button} from '../../components/Buttons/Button/index';

const About = () => {
  return (
    <section className='about section' id='about'>
        <SectionTitle>About Me</SectionTitle>
        <SectionSubtitle>My introduction</SectionSubtitle>
        <div className='about__container container grid'>
            <img src={aboutMe} alt='' className='about__img'></img>
            <div className='about__data'>
              <p className='about__description'>
                Web developer, with extensive knowledge and years of experience, working in web technologies and UI / UX design, delivering quality work.
              </p>

              <div className='about__info'>
                <div>
                  <span className='about__info-title'>01+</span>
                  <span className='about__info-name'> Years<br></br> experience</span>
                </div>
                <div>
                  <span className='about__info-title'>2</span>
                  <span className='about__info-name'> Completed<br></br>project</span>
                </div>
                <div>
                  <span className='about__info-title'>3</span>
                  <span className='about__info-name'> Month<br></br>Business Analyst</span>
                </div>
              </div>

              <div className='about__buttons'>
                <Button download='' href='#' className='button--flex'>
                  Download CV <i class="uil uil-download-alt button__icon"></i>
                </Button>
              </div>
            </div>
        </div> 
    </section>
  )
}

export default About