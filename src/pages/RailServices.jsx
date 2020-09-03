// import { ImportExport } from "@mui/icons-material"
import React from "react"
import AboutServicesRail from "../components/RailPage/AboutServicesRail"
import ServicesPageRail from "../components/RailPage/ServicesPageRail"
import TestimonialsRail from "../components/RailPage/TestimonialsRail"
import BlogRail from "../components/RailPage/BlogRail"
import PortfolioLTL from "../components/LTLPage/PortfolioLTL"
import ContactServicesRail from "../components/RailPage/ContactServiceRail"
import '../components/serviceFolder/ServicesTest.css'
import { Skills } from "../components/Skills"


export const LTLServices = () => {
  return (
    <>
      <AboutServicesRail />
      <Skills />
      <ServicesPageRail />
      {/* <Counter /> */}
      <PortfolioLTL /> 
      <TestimonialsRail />
      <BlogRail />
      <ContactServicesRail />
    </>
  )
}

export default LTLServices;