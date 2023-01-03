// import { ImportExport } from "@mui/icons-material"
import React from "react"
import AboutServicesCarrier from "../carriers/AboutServicesCarrier"
// import { ServicesPageCarrier } from "../carriers/ServicesPageCarrier"
import TestimonialsCarrier from "../carriers/TestimonialsCarrier"
import BlogCarrier from "../carriers/BlogCarrier"
import ContactServicesCarrier from "../carriers/ContactServiceCarrier"
import '../components/serviceFolder/ServicesTest.css'
import { FormProvider } from "../context/FormContext"

export const CarriersTab = () => {
  return (
    <>
      <AboutServicesCarrier />
      {/* <ServicesPageCarrier /> */}
      {/* <Counter />
      <Portfolio /> */}
      <FormProvider>
        <TestimonialsCarrier />

      </FormProvider>
      <BlogCarrier />
      <ContactServicesCarrier />
    </>
  )
}

export default CarriersTab;