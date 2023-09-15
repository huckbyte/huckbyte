import React from 'react'
import "./portfolio.css"
import img from "../../assests/back.webp"
import img1 from "../../assests/frontend_.png"
import img2 from "../../assests/front.png"
import img3 from "../../assests/teck.jfif"
import { BsGithub,BsTrophy } from 'react-icons/bs'


const data = [
  {
    id:1,
    image: img,
    title: "Back-End development",
    github: "https://github.com/huckbyte",
    demo: "https://demo.com"
  },
  {
    id:2,
    image: img1,
    title: "Front-End development",
    github: "https://github.com/huckbyte",
    demo: "https://demo.com"
  },
  {
    id:3,
    image: img2,
    title: "AI-Models",
    github: "https://github.com/huckbyte",
    demo: "https://demo.com"
  },
  {
    id:4,
    image: img3,
    title: "Machine Learning",
    github: "https://github.com/huckbyte",
    demo: "https://demo.com"
  }

]


function Portfolio() {
  return (
       <section id='portfolio'>
        <h5> WHO I  AM</h5>
        <h2>portfolio</h2>
        <div className='container portfolio_container '>
          {
                data.map(({id, image, title, github, demo}) => {
                  return (
                              <article key = {id} className='portfolio_item'>
                              <div className='portfolio_image'>
                              <img src= {image} alt={title}/>
                              </div>
                              
                              <h3>{title}</h3>
                              <div className='portfolio-cta'>
                              <a href= {github}className='btn'>
                              <BsGithub/>Github</a>
                              <a href={demo} className='btn btn-primary' ><BsTrophy/>Live Demo</a>
                              </div>
                              
                            </article>
                  )
                })
          }

        </div>

       </section>
  )
}




export default Portfolio
