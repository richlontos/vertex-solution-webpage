import React from "react";

//import components
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaqQuestions } from '../components/FaqQuestions';
import FaqQuestions from "../FaqQuestions";
import FaqService from "../FaqService";



const Faq = () => {
    
  
  return (
    <div>
        <FaqService />
        <FaqQuestions />
    </div>
  )
}

export default Faq;