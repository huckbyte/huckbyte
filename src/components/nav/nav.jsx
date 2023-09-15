import React from 'react'
import "./nav.css"
import { useState } from 'react'
import {AiFillProject} from 'react-icons/ai'
import {FaServicestack}  from "react-icons/fa"
import { BsFillBookFill} from 'react-icons/bs'
import { AiOutlineHome,AiOutlinePhone,AiOutlineUser,AiOutlineTeam} from "react-icons/ai"


function Nav() {
  const [activeNav,setActiveNav] = useState("#")
  return (

    <nav>
        <a href='#' onClick={() => setActiveNav("#home")} className={activeNav === "#home" ? "active" : ""}>
            <AiOutlineHome/></a>
        <a href='#about'onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><AiOutlineUser/></a>
        <a href='#experience'onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""} ><BsFillBookFill/></a>
        <a href='#portfolio'onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "active" : ""}><AiFillProject/></a>
        <a href='#services'onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? "active" : ""}><FaServicestack/></a>
        <a href='#teams'onClick={() => setActiveNav("#teams")} className={activeNav === "#teams" ? "active" : ""}><AiOutlineTeam/></a>
        <a href='#contact'onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><AiOutlinePhone/></a>
    
    </nav>
    
  )  
}

export default Nav

