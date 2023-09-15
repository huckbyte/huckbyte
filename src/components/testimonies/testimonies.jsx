import React from 'react'
import "./Testimonios.css"
// import img from "../../assests/profile-1.jpeg"
import img1 from "../../assests/profile-2.jpeg"
import img2 from "../../assests/profile-3.jpeg"
import img3 from "../../assests/profile-4.jpeg"
import img4 from "../../assests/profile-5.jpeg"
function Testimonios() {
  return (
    
    <section class="teams" id="teams">
        <div class="max-width">
            <h2 class="title">MY Team</h2>
            <div class="carousel ">
                <div class="card">
                    <div class="box">
                        <img src={img1} alt=""></img>
                        <div class="text">Someone name</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                    <img src={img2} alt=""></img>
                        <div class="text">Someone name</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                    <img src={img3} alt=""></img>
                        <div class="text">Someone name</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                    <img src={img4} alt=""></img>
                        <div class="text">Someone name</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>

            </div>
        </div>
</section>
  )
}

export default Testimonios