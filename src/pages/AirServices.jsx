// import { ImportExport } from "@mui/icons-material"
import React from "react"
import AboutServicesAir from "../components/AirPage/AboutServicesAir"
import ServicesPageAir from "../components/AirPage/ServicesPageAir"
import TestimonialsAir from "../components/AirPage/TestimonialsAir"
import BlogAir from "../components/AirPage/BlogAir"
import ContactServicesAir from "../components/AirPage/ContactServiceAir"
import '../components/serviceFolder/ServicesTest.css'
import { Skills } from "../components/Skills/Skills"
import ContactTab from "../components/ContactTab"


export const AirServices = () => {
  return (
    <>
      <AboutServicesAir />
      <Skills />
      <ServicesPageAir />
      {/* <Counter />
      <Portfolio /> */}
      {/* <TestimonialsAir /> */}
      <BlogAir />
      <ContactTab />
    </>
  )
}

export default AirServices;