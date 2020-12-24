import React from "react"
import { Heading } from "./components/common/Heading"
import { faq } from "./components/data/dummydata"
// import contact from '../assets/img/contact.jpg';
import contact from "./assets/img/Faq.jpg";


export const FaqService = () => {
  return (
    <>
        <div className='faqBg'>
       
               <img  className="faqPic" src={ contact}  /> 
  
        </div>
    </>
  )
}


export default FaqService;