import { ImportExport } from "@mui/icons-material"
import React from "react"
import AboutServicesAir from "../components/AirPage/AboutServicesAir"
import ServicesPageAir from "../components/AirPage/ServicesPageAir"
import TestimonialsAir from "../components/AirPage/TestimonialsAir"
import BlogAir from "../components/AirPage/BlogAir"
import ContactServicesAir from "../components/AirPage/ContactServiceAir"
import '../components/serviceFolder/ServicesTest.css'


export const AirServices = () => {
  return (
    <>
      <AboutServicesAir />
      <ServicesPageAir />
      {/* <Counter />
      <Portfolio /> */}
      <TestimonialsAir />
      <BlogAir />
      <ContactServicesAir />
    </>
  )
}

export default AirServices;