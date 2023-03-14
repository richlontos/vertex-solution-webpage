import React from 'react'
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ContactTab from "../components/ContactTab";
import ContactBanner from "../components/ContactBanner";
import { Skills } from "../components/Skills/Skills";
import CareerTabAbout from '../components/Careers/CareerTabAbout';
import CareerTabHero from '../components/CareerTabHero';
import CareerTabSupport from '../components/CareersTabSupport';
import { Banner } from '../components/Banner';

function Careers() {
    return (
        <div>
            {/* <ContactBanner /> */}
             <CareerTabSupport />
             <br />
             <CareerTabAbout />
            <Skills />
            <ContactTab />
        </div>
    )
}

export default Careers