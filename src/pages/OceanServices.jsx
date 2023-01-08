// import { ImportExport } from "@mui/icons-material"
import React from "react"
import AboutServicesOcean from "../components/OceanPage/AboutServicesOcean"
import ServicesPageOcean from "../components/OceanPage/ServicesPageOcean"
import TestimonialsOcean from "../components/OceanPage/TestimonialsOcean"
import BlogOcean from "../components/OceanPage/BlogOcean"
import ContactServicesOcean from "../components/OceanPage/ContactServiceOcean"
import '../components/serviceFolder/ServicesTest.css'
import { Skills } from "../components/Skills"


export const OceanServices = () => {
  return (
    <>
      <AboutServicesOcean />
      <Skills />
      <ServicesPageOcean />
      {/* <Counter />
      <Portfolio /> */}
      <TestimonialsOcean />
      <BlogOcean />
      <ContactServicesOcean />
    </>
  )
}

export default OceanServices;