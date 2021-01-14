import React from 'react'
import "../Careers/AboutStyle.css"


import { GiReceiveMoney, GiSunglasses } from "react-icons/gi";
import { TbDental } from "react-icons/tb";
import { MdPaid, MdHealthAndSafety } from "react-icons/md";


import {
    
    BadgeCheckIcon,
    SortAscendingIcon
} from '@heroicons/react/solid'



const CareerTabAbout = () => {
    return (
        <div name='about' className='w-full my-32'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='text-center'>
                    <h2 className='text-5xl font-bold'>Benefits</h2>
                    <p className='text-3xl py-5 text-gray-500'>OUR PEOPLE, OUR PRIORITY. <br />
                        At Vertex Solution, we have an array of lucrative benefits offered to all our full-time employees. </p>
                </div>

                <div className='lowerContainer grid md:grid-cols-5 gap-3 px-2 text-center'>
                    
                    <div className='border py-5 rounded-xl shadow-xl' >
                        <p className='text-2xl font-bold text-indigo-500'>PAY SICK DAYS</p>
                        <GiReceiveMoney size='100px' style={{ height: "70PX", marginLeft: "60PX" }} />
                    </div>
                    <div className='border py-5 rounded-xl shadow-xl' >
                        <p className='text-2xl font-bold text-indigo-500'>DENTAL</p>
                        <TbDental size='100px' style={{ height: "70PX", marginLeft: "60PX" }} />
                    </div>
                    <div className='border py-5 rounded-xl shadow-xl' >
                        <p className='text-2xl font-bold text-indigo-500'>VISION</p>
                        <GiSunglasses size='100px' style={{ height: "70PX", marginLeft: "65PX" }} />
                    </div>
                    <div className='border py-5 rounded-xl shadow-xl' >
                        <p className='text-2xl font-bold text-indigo-500'>PAID HOLIDAYS</p>
                        <MdPaid size='100px' style={{ height: "70PX", marginLeft: "60PX" }} />
                    </div>
                    <div className='border py-5 rounded-xl shadow-xl' >
                        <p className='text-2xl font-bold text-indigo-500' >HEALTH</p>
                        <MdHealthAndSafety size='100px' style={{ height: "70PX", marginLeft: "60PX" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CareerTabAbout