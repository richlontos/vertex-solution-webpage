import React from 'react'
import "../Careers/AboutStyle.css"

// import { HiCurrencyDollar } from "react-icons/hi2";

import {
    CurrencyDollarIcon,
    ShareIcon,
    CashIcon,
    BadgeCheckIcon,
    SortAscendingIcon
} from '@heroicons/react/solid'

const CareerTabAbout = () => {
    return (
        <div name='about' className='w-full my-32'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='text-center'>
                    <h2 className='text-5xl font-bold'>Benefits</h2>
                    <p className='text-3xl py-6 text-gray-500'>OUR PEOPLE, OUR PRIORITY. <br />
                        At Vertex Solution, we have an array of lucrative benefits offered to all our full-time employees. </p>
                </div>

                <div className='lowerContainer grid md:grid-cols-5 gap-3 px-2 text-center'>
                    
                    <div className='border py-6 rounded-xl shadow-xl' >
                        <p className='text-2xl font-bold text-indigo-500'>PAY SICK DAYS</p>
                        <CurrencyDollarIcon style={{ height: "70PX", marginLeft: "70PX" }} />
                    </div>
                    <div className='border py-6 rounded-xl shadow-xl' >
                        <p className='text-2xl font-bold text-indigo-500'>DENTAL</p>
                        <ShareIcon style={{ height: "70PX", marginLeft: "70PX" }} />
                    </div>
                    <div className='border py-6 rounded-xl shadow-xl' >
                        <p className='text-2xl font-bold text-indigo-500'>VISION</p>
                        <BadgeCheckIcon style={{ height: "70PX", marginLeft: "70PX" }} />
                    </div>
                    <div className='border py-6 rounded-xl shadow-xl' >
                        <p className='text-2xl font-bold text-indigo-500'>PAID HOLIDAYS</p>
                        <SortAscendingIcon style={{ height: "70PX", marginLeft: "70PX" }} />
                    </div>
                    <div className='border py-6 rounded-xl shadow-xl' >
                        <p className='text-2xl font-bold text-indigo-500'>HEALTH INSURANCE</p>
                        <SortAscendingIcon style={{ height: "70PX", marginLeft: "70PX" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CareerTabAbout