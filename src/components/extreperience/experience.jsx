import React from 'react'
import "./Experience.css"
import {BsPatchCheckFill} from "react-icons/bs"
function Experience() {
  return (
    
    <section id='experience'>
      <h5>My skills</h5>
      <h2>Experience</h2>

      <div className='container experience_container'>
          <div className='experience_front'>
            <h3> Fronted Development</h3>
            <div className='experience_content'>
              <article className='experience_details'>
                <BsPatchCheckFill className='icons'/>
                <div>
                <h4 >HTML</h4>
                <small className='text-light'>Exp</small>
                </div>
                
              </article>
              <article className='experience_details'>
              <BsPatchCheckFill className='icons'/>
                <div>
                <h4 >CSSL</h4>
                <small className='text-light'>Exp</small>
                </div>
                
              </article>
              <article className='experience_details'>
              <BsPatchCheckFill className='icons'/>
                <div>
                <h4 >JAVA</h4>
                <small className='text-light'>Exp</small>
                </div>
                
              </article>
            </div>
          </div>

          <div className='experience_back'>
            <h3> Backend Development</h3>
            <div className='experience_content'>
              <article className='experience_details'>
              <BsPatchCheckFill className='icons'/>
                <div>
                <h4 >PYTHON</h4>
                <small className='text-light'>Exp</small>
                </div>
                
              </article>
              <article className='experience_details'>
              <BsPatchCheckFill className='icons'/>
                <div>
                <h4 >SQL</h4>
                <small className='text-light'>Exp</small>
                </div>
              
              </article>
              <article className='experience_details'>
              <BsPatchCheckFill className='icons'/>
                <div>
                <h4 >MYSQL</h4>
                <small className='text-light'>Exp</small>
                </div>
                
              </article>
              <article className='experience_details'>
              <BsPatchCheckFill className='icons'/>
                <div>
                <h4 >NODEJS</h4>
                <small className='text-light'>Exp</small>
                </div>
                
              </article>
            </div>
          </div>
          <div className='experience_face'>
            <h3> Face Recognition Development</h3>
            <div className='experience_content'>
              <article className='experience_details'>
              <BsPatchCheckFill className='icons'/>
                <div>
                <h4 >OpenCv</h4>
                <small className='text-light'>Exp</small>
                </div>
                
              </article>
              <article className='experience_details'>
              <BsPatchCheckFill className='icons'/>
                <div>
                <h4 >Mediapipe</h4>
                <small className='text-light'>Exp</small>
                </div>

                
              </article>
            </div>
          </div>
          <div className='experience_face'>
            <h3> Face Recognition Development</h3>
            <div className='experience_content'>
              <article className='experience_details'>
              <BsPatchCheckFill className='icons'/>
                <div>
                <h4 >OpenCv</h4>
                <small className='text-light'>Exp</small>
                </div>
                
              </article>
              <article className='experience_details'>
                
                <div>
                <h4 >Mediapipe</h4>
                <small className='text-light'>Exp</small>
                </div>
               
              </article>
            </div>
          </div>
      </div>
    </section>

  )
}

export default Experience