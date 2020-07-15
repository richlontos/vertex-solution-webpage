import React from "react";

//import components
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ContactTab from "./ContactTab";
import TermsBanner from "./TermsBanner";
import { SkillsContact } from "./SkillsContact";
import { TermsInformation } from "./TermsInformation";



const TermsConditions = () => {
    
  
  return (
    <div>
       <TermsBanner />
       <TermsInformation />
       
       <ContactTab />
    </div>
  )
}

export default TermsConditions;