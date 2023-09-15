import React from 'react'
import "./Footer.css"
import fb from "../../assests/icons/fb.png"
import ig from "../../assests/icons/ig.png"
import tw from "../../assests/icons/tw.png"
import hm from "../../assests/icons/home.png"
// import tw from "../../assests/icons/tw.png"
// import tw from "../../assests/icons/tw.png"
// import tw from "../../assests/icons/tw.png"
function Footer() {
  return (
    <footer>
      <a href='##' className='footlogo'>Return</a>
      <ul className='links'>
        <li><a href='#home'><img src={hm} className="icons" alt='fb'></img></a></li>
        <li><a href='#about'><img src={fb} className="icons" alt='fb'></img></a></li>
        <li><a href='#experience'><img src={fb} className="icons" alt='fb'></img></a></li>
        <li><a href='#services'><img src={fb} className="icons" alt='fb'></img></a></li>
        <li><a href='#contacts'><img src={fb} className="icons" alt='fb'></img></a></li>
      </ul>

      <div className='foot_icons'>
        <a href='https://facebook.com'><img src={fb} className="icons" alt='fb'></img></a>
        <a href='https://instagram.com'><img src={ig} className="icons" alt='fb'></img></a>
        <a href='https://twitter.com'><img src={tw} className="icons" alt='fb'></img></a>
      </div>
      <div className="copyright"></div>
    </footer>
  )
}

export default Footer