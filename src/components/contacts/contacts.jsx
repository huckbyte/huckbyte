import React from 'react'
import "./Contacts.css"

function Contacts() {

  return (
     <section class="contact" id="contact">
        <div class="max-width">
            <h2 class="title">Contact me</h2>
            <div class="contact-content">
   
                <div class="column right">
                    <div class="text">Message me</div>
                    <form action="#">
                        <div class="fields">
                            <div class="field name">
                                <input type="text" placeholder="Name" required></input>
                            </div>
                            <div class="field email">
                                <input type="email" placeholder="Email" required></input>
                            </div>
                        </div>
                        <div class="field">
                            <input type="text" placeholder="Subject" required></input>
                        </div>
                        <div class="field textarea">
                            <textarea cols="30" rows="10" placeholder="Message.." required></textarea>
                        </div>
                        <div class="button-area">
                            <button type="submit">Send message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    
  )
}

export default Contacts