import React from 'react'
import ContactBanner from '../components/ContactBanner'
import ContactTab from '../components/ContactTab'
import Companies from '../components/Companies';
import img1 from '../assets/img/img1-1.jpg'
// import img2 from "../assets/img/img2"
// import img3 from "./assets/img3_1.jpg";
import Blog from '../components/ServicesPages/Blog';
import { Skills } from '../components/Skills/Skills'
import ChooseUs from '../components/Choose-us/ChooseUs';
import ResourcesTab from '../components/Resources/ResourcesTab'
import FreeCourse from '../components/Free-course-section/FreeCourse'
import BlogH from '../components/BlogH';
import OurServices from '../components/OurServices';
import FaqService from '../FaqService';

function Resources() {
  const contents = [
    {
      title: "Safe, Affordable, And Trusted",
      des: "Volunteer trail stewardship projects in America’s parks and forests designed specifically for college student groups and young professionals.",
      img: img1,
    },
    {
      title: "Enjoy Your Life With Us Now!",
      des: "Volunteer trail stewardship projects in America’s parks and forests designed specifically for college student groups and young professionals.",
      // img: img2,
    },
    {
      title: "Let’s Enjoy Nature With Us",
      des: "Volunteer trail stewardship projects in America’s parks and forests designed specifically for college student groups and young professionals.",
      // img: img3,
    },
  ];
  return (
    <div>
     <ChooseUs />
     <Skills />
     <FreeCourse />
 
 </div>
  )
}

export default Resources