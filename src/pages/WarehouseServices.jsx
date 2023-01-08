// import { ImportExport } from "@mui/icons-material"
import React from "react"
import AboutServicesWarehouse from "../components/WarehousePage/AboutServicesWarehouse"
import ServicesPageWarehouse from "../components/WarehousePage/ServicesPageWarehouse"
import TestimonialsWarehouse from "../components/WarehousePage/TestimonialsWarehouse"
import BlogWarehouse from "../components/WarehousePage/BlogWarehouse"
import ContactServicesWarehouse from "../components/WarehousePage/ContactServiceWarehouse"
import '../components/serviceFolder/ServicesTest.css'
import { Skills } from "../components/Skills"


export const WarehouseServices = () => {
  return (
    <>
      <AboutServicesWarehouse />
      <Skills />
      <ServicesPageWarehouse />
      {/* <Counter />
      <Portfolio /> */}
      <TestimonialsWarehouse />
      <BlogWarehouse />
      <ContactServicesWarehouse />
    </>
  )
}

export default WarehouseServices;