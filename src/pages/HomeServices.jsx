// import { ImportExport } from "@mui/icons-material"
import React from "react"
import AboutServices from "../components/ServicesPages/AboutServices"
import Blog from "../components/ServicesPages/Blog"
import ContactServices from "../components/ServicesPages/ContactService"
// import Counter from "../components/ServicesPages/Counter"
// import Portfolio from "../components/ServicesPages/Portfolio"
import ServicesPage from "../components/ServicesPages/ServicesPage"
import { Testimonials } from "../components/ServicesPages/Testimonials"
import '../components/serviceFolder/ServicesTest.css'


export const HomeServices = () => {
  return (
    <>
      <AboutServices />
      <ServicesPage />
      {/* <Counter />
      <Portfolio /> */}
      <Testimonials />
      <Blog />
      <ContactServices />
    </>
  )
}

export default HomeServices;