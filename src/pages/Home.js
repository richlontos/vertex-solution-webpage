import React from "react";

//import components
import { Banner } from "../components/Banner";
import { Contact } from "../components/Contact";
// import { Footer } from "../components/Footer";
// import { NavBar } from "../components/NavBar";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
// import { Quote } from "react-bootstrap-icons";



const Home = () => {
    return (
        <div>

            <Banner />
            <Skills />
            <Projects />
            <About />
            <Contact />



        </div>
    )
}

export default Home;