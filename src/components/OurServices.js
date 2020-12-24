import React from 'react';
import img1 from '../assets/img/img1-1.jpg';
import img2 from '../assets/img/img1-2.jpg';
import img3 from '../assets/img/img1-3.jpg';
import BlogH from './BlogH';
import Companies from './Companies';
import ContactTab from './ContactTab';
import { Skills } from './Skills/Skills';



function OurServices() {
    const contents = [
        {
            title: "FULL TRUCK LOAD",
            des: "FTL is industry shorthand for full truckload, or a truckload–most often a dry van or reefer–with a dedicated shipment from a single shipper to a single location. You may also see it referred to as just TL, or truckload. The alternative is LTL, or less than truckload, which is a truckload with multiple shipments from multiple shippers bound for multiple locations.",
            img: img1,
        },
        {
            title: "LTL FREIGHT",
            des: "Less than truckload freight shipping (LTL) is used for the transportation of small freight or when freight doesn’t require the use of an entire trailer. This shipping method can be used when freight weighs between 150 and 15,000 pounds. When shipping LTL, the shipper pays for the portion of a standard truck trailer their freight occupies, while other shippers and their shipments fill the unoccupied space. There are a number of benefits to shipping via LTL.",
            img: img2,
        },
        {
            title: "VOLUME/PARTIAL",
            des: "Shipments that are larger than LTL but less than a full truck trailer are considered partial truckload. Partial truckload shipments usually range from 8 to 18 pallets, 8,000 to 27,500 pounds, and occupy more than 12 feet of linear space in a trailer.",
            img: img3,
        },
    ];
    return (
        <div>
            <BlogH content={contents[0]} />
            <Companies />
            <BlogH content={contents[1]} alternative={true} />
            <BlogH content={contents[2]} />
            <Skills />
            {/* <Review /> */}
            <ContactTab />
        </div>
    )
}


export default OurServices