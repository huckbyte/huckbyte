import React from 'react'
import "./header.css"
import "./title.css"
import Nav from "../nav/nav"
import BG from "../../assests/colo.jpg"
function Header() {
  return (

  <header>

    <Nav/>
    <div className='container header_container'>
    <div className='bg'>
            <img src={BG} alt=" "/>
            </div>
      <div className='wrapper'>
        <div className='box'>
        <h5 >Hi Iam </h5>
        <h5>hezi paps</h5>
        <h5> System Enginneer</h5>
        </div>

      </div> 
      <div class="box_wrap" >
    <div class="img" data-tilt>
    <img src={BG} alt=""/>
    <div class="card">
      <h1>hezipaps</h1>
    </div>
    </div>
  </div>

      <a href='"contact' className='scroll_down'>scroll down</a>
    </div>
  
  </header>
  

  )
}

export default Header