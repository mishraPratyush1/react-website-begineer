import React from "react";
import Common from "./Common";
import two from '../src/images/3.jfif'


const About = () =>{
return(
  <>
   <Common name="Welcome To About Page" 
   imgscr={two}
   visit="/contact"
   btnName="contact Now"/>
  </>
)
}
export default About;