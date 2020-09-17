import React from "react";

//import components
import { Banner } from "../components/Banner";
import { Contact } from "../components/Contact";
// import { Footer } from "../components/Footer";
// import { NavBar } from "../components/NavBar";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import AboutUs from "../components/About-us/AboutUs";
import Company from "../components/Company-section/Company";
// import { Quote } from "react-bootstrap-icons";



const Home = () => {
    return (
        <div>

            <Banner />
            <Skills />
            <Company />
            <AboutUs />
            <Projects />
            <About />
            <Contact />



        </div>
    )
}

export default Home;