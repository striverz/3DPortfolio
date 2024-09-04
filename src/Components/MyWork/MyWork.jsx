import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon  from '../../assets/arrow_icon.svg'
import linkedin from "../../assets/linkedin.png"

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="title-box">
        <h1>My Creative <span className="spn-port">Portfolio</span> Section</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">

        

        <a href="https://github.com/striverzx/devsavor"><img src={mywork_data[0].w_img}></img></a>
        <a href="https://github.com/striverzx/netflixgpt"><img src={mywork_data[1].w_img}></img></a>
        <a href="https://github.com/striverzx/3DPortfolio"><img src={mywork_data[2].w_img}></img></a>
        
      </div>
      <div className="mywork-showmore">
       <a href="https://github.com/striverzx"> <p>Show More</p></a>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  )
}

export default MyWork
