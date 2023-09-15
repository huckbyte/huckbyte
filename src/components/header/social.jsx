import React from 'react'
import "../header/social.css"
import gt from "../../assests/icons/git.png"
import fb from "../../assests/icons/fb.png"
import ig from "../../assests/icons/ig.png"
import tw from "../../assests/icons/tw.png"
import tl from "../../assests/icons/telegram.png"
import gthb from "../../assests/icons/git.png"
import lk from "../../assests/icons/blog.png"
function Social() {
  return (
    
    <div className='social'>
      <button class="spin">
      <a href='https://google.com' target = "-blank"><img src={gt} className="icons" alt='fb'></img></a>
      </button>
       <button class="spin">
         <a href='https://google.com' target = "-blank"><img src={gt} className="icons" alt='fb'></img></a>
      </button>
      <button class="spin">
         <a href='https://google.com' target = "-blank"><img src={fb} className="icons" alt='fb'></img></a>
      </button>
      <button class="spin">
        <a href='https://google.com' target = "-blank"><img src={ig} className="icons" alt='fb'></img></a>
      </button>
      <button class="spin">
        <a href='https://google.com' target = "-blank"><img src={tw} className="icons" alt='fb'></img></a>
        </button>
        <button class="spin">
         <a href='https://google.com' target = "-blank"><img src={tl} className="icons" alt='fb'></img></a>
        </button>
        <button class="spin">
        <a href='https://google.com' target = "-blank"><img src={gthb} className="icons" alt='fb'></img></a>
        </button>
        <button class="spin">
        <a href='https://google.com' target = "-blank"><img src={lk} className="icons" alt='fb'></img></a>
        </button>

    </div>

  )
}

export default Social