import React from "react";

import AboutServices from "../components/ServicesPages/AboutServices"
import Blog from "../components/ServicesPages/Blog"
import ContactServices from "../components/ServicesPages/ContactService"
import Counter from "../components/ServicesPages/Counter"
import Portfolio from "../components/ServicesPages/Portfolio"
import ServicesPage from "../components/ServicesPages/ServicesPage"
import { Testimonials } from "../components/ServicesPages/Testimonials"
//import components
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Skills } from "../components/Skills";
// import { Skills } from "../components/Skills";
// import ServicesTest from "../components/serviceFolder/ServicesTest";


const Services = () => {
  
  return (
    <div>
        <AboutServices />
        <Skills />
      <ServicesPage />
      <Counter />
      <Portfolio />
      <Testimonials />
      <Blog />
      <ContactServices />
    </div>
  )
}

export default Services;