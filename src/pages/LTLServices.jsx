// import { ImportExport } from "@mui/icons-material"
import React from "react"
import AboutServicesLTL from "../components/LTLPage/AboutServicesLTL"
// import ServicesPageLTL from "../components/LTLPage/ServicesPageLTL"
import TestimonialsLTL from "../components/LTLPage/TestimonialsLTL"
import BlogLTL from "../components/LTLPage/BlogLTL"
import ContactServicesLTL from "../components/LTLPage/ContactServiceLTL"
import '../components/serviceFolder/ServicesTest.css'
import { Skills } from "../components/Skills"
import ContactTab from "../components/ContactTab"


export const LTLServices = () => {
  return (
    <>
      <AboutServicesLTL />
      <Skills />
      {/* <ServicesPageLTL /> */}
      {/* <Counter />
      <Portfolio /> */}
      <BlogLTL />
      <TestimonialsLTL />
      <ContactTab/>
    </>
  )
}

export default LTLServices;