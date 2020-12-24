import React from "react";

//import components
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaqQuestions } from '../components/FaqQuestions';
import FaqQuestions from "../FaqQuestions";
import FaqService from "../FaqService";
import { Skills } from "../components/Skills/Skills";



const Faq = () => {
    
  
  return (
    <div>
        <FaqService />
        <Skills />
        <FaqQuestions />
    </div>
  )
}

export default Faq;