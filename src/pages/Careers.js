import React from 'react'
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ContactTab from "../components/ContactTab";
import ContactBanner from "../components/ContactBanner";
import { Skills } from "../components/Skills";
import CareersTab from '../components/CareersTab';

function Careers() {
    return (
        <div>
            <ContactBanner />
            <Skills />
            <CareersTab />
            <ContactTab />
        </div>
    )
}

export default Careers