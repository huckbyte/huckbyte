import React from 'react'
import "./About.css"
import Me from "../../assests/profile-2.jpeg"


function About() {
  return (
    <section class="about " id="about">
        <div class="max-width">
            <h5 class="title">About<span>Me</span></h5>
            <div class="about-content">
                <div class="image">
                    <img src={Me} alt=""></img>
                </div>
                <div class="intro">
                    <div class="text"><span>I am </span> Hezron Paipai Omondoi </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut voluptatum eveniet doloremque autem excepturi eaque, sit laboriosam voluptatem nisi delectus. Facere explicabo hic minus accusamus alias fuga nihil dolorum quae. Explicabo illo unde, odio consequatur ipsam possimus veritatis, placeat, ab molestiae velit inventore exercitationem consequuntur blanditiis omnis beatae. Dolor iste excepturi ratione soluta quas culpa voluptatum repudiandae harum non.</p>
                    <a className= "cv" href="#home">Download CV</a>
                </div>
            </div>
        </div>
    </section>
    

  )
} 

export default About