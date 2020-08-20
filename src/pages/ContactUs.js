import React from "react";

//import components
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ContactTab from "../components/ContactTab";
import ContactBanner from "../components/ContactBanner";
import { Skills } from "../components/Skills";



const ContactUs = () => {
    
  
  return (
    <div>
       <ContactBanner />
       <Skills />
       <ContactTab />
    </div>
  )
}

export default ContactUs;