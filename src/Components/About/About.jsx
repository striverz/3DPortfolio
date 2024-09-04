import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile2.png'
import linkedin from "../../assets/linkedin.png"
import twitter from "../../assets/twitter.png"
import coding from "../../assets/coding.png"
import github from "../../assets/github.png"



const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" /> 
            <div className="social-media">
              <a href="https://www.linkedin.com/in/manikanta-korimilli-04a22324b/"><img src={linkedin}/></a>
              <a href="https://x.com/striverz_011"><img src={twitter}/></a>
              <a href="https://github.com/striverzx"><img src={github}/></a>
              <a href="https://leetcode.com/u/striverz/"><img src={coding}/></a>
              
              </div>   
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am an Frontend Developer and Competitive Programmer. Throughout my career, I have had the privilege of collaborating with prestigious Developer Communities, contributing to their success and growth.</p>
                <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>C++, Java</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>ReactJs</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"80%"}} /></div>
                <div className="about-skill"><p>Node JS</p><hr style={{width:"60%"}} /></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
