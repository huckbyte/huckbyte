import React from 'react'
import Header from "./components/header/header"

import About from "./components/about/about"
import Experience from"./components/extreperience/experience"
import Services from "./components/services/services"
import Portfolio from "./components/portfolio/portfolio"
import Testimonios from "./components/testimonies/testimonies"
import Contacts from "./components/contacts/contacts"

const observer = new IntersectionObserver((entries ) => {
  entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
          entry.target.classList.add("show");

      }
      else {
          entry.target.classList.remove("show");
      }
  });
});

const hiddenelement  = document.querySelectorAll(".hidden")
hiddenelement.forEach((el) => observer.observe(el));
const App = () => {
  return (
    <>
    
       <Header />
        <About/>
       <Experience/>
       <Portfolio/>
       <Services/>
       <Testimonios/>
       <Contacts/>
 
       
    </>

  )
}

export default App





