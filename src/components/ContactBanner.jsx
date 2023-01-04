import React from 'react'
import { Heading } from "./common/Heading"
import '../assets/img/contact.jpg';
import contact from '../assets/img/contact.jpg';

function ContactBanner() {
  return (
    <section className=' contactBack'>
        <div className='contactContainerService  '>
       
            <>
               <img  src={ contact} ></img>
            
                <h1 className='imageText'>Get in touch</h1>
               
            
              
            </>
         
        </div>
      </section>
  )
}

export default ContactBanner