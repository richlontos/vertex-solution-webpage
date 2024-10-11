import React from "react";

//import components
import { Banner } from "../components/Banner";
import { Contact } from "../components/Contact";
// import { Footer } from "../components/Footer";
// import { NavBar } from "../components/NavBar";
import { Projects } from "../components/Projects/Projects";
import AboutUs from "../components/About-us/AboutUs";
import Company from "../components/Company-section/Company";
import { Testimonials } from "../components/ServicesPages/Testimonials";
import { About } from "../components/About/About";
import { SkillsContact } from "../components/SkillsContact";
import { BestInClass } from "../components/BestInClass/BestInClass";
// import { Quote } from "react-bootstrap-icons";



const Home = () => {
    return (
        <div>

            <Banner />
            <SkillsContact />
            <AboutUs />
            <BestInClass />
            <Company />
            <Projects />
            <About />
            {/* <Testimonials /> */}
            <Contact />



        </div>
    )
}

export default Home;