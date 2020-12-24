import React from "react";

//import components
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ContactTab from "../components/ContactTab";
import ContactBanner from "../components/ContactBanner";
import { SkillsContact } from "../components/SkillsContact";



const ContactUs = () => {
    
  
  return (
    <div>
       <ContactBanner />
       <SkillsContact />
       <ContactTab />
    </div>
  )
}

export default ContactUs;