import React from 'react'
import { FaHeadset, FaMailBulk } from 'react-icons/fa';
import supportImg from '../assets/support.jpg'


function CareersTab() {
    return (
        <div name='support' className=' w-full mt-24'>
            <div className='w-full h-[700px] bg-gray-900/90 absolute'>
                <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />
            </div>

            <div className='flex-Wrap max-w-[1240px] mx-auto text-white relative'>
                <div className='px-4 py-12'>
                    <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Careers</h2>
                    <h3 className='text-5xl font-bold py-6 text-center'>Finding the right Job</h3>
                    <p className='py-4 text-2xl text-slate-300'>The strength of Vertex Soluions will always be our people. By hiring the right people, delivering the right service and doing the right thing, Vertex Solutions has continuously exceeded the expectations of our employees, customers and carriers. It’s what we do together that sets us apart.</p>
                </div>

                <div className=' flex flex-row flex-wrap  gap-x-8 gap-y-16 px-20 pt-12 sm:pt-20 text-black'>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            {/* <PhoneIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' /> */}
                            <h2 className='font-bold  my-6'>Account Executive</h2>
                            <p className='text-gray-600 text-xl'>We are seeking a Outside Sales Representative in the top growing industry, Transportation! Join our team if you are hungry to grow your own book of business with residual monthly commissions. You will prospect to generate new business and offer solutions to drive company revenue.</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-1'>
                            <p className='flex items-center text-indigo-600'>Contact Us <a href="tel:5629667406"><FaHeadset className='w-8 ml-2' /></a> <a href="mailto:csr@vertex4solutions.net" style={{ "textDecoration": "none" }}><FaMailBulk /></a></p>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            {/* <SupportIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' /> */}
                            <h2 className='font-bold  my-6'>Freight Agent</h2>
                            <p className='text-gray-600 text-xl'>For the entrepreneurs looking to become financially free or be their own boss, this might be the smartest choice you have ever made. We love to work with agents that are ambitious and always looking for ways to improve sales.</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-10'>
                            <p className='flex items-center text-indigo-600'>Contact Us <a href="tel:5629667406"><FaHeadset className='w-8 ml-2' /></a> <a href="mailto:csr@vertex4solutions.net" style={{ "textDecoration": "none" }}><FaMailBulk /></a></p>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            {/* <ChipIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' /> */}
                            <h2 className='font-bold  my-6'>Carrier</h2>
                            <p className='text-gray-600 text-xl'>Hauling freight requires a collaborative approach to achieve a shared goal – delivery. And for that reason, you need a freight broker that is reliable, responsive and provides the carrier resources to ensure success.</p>
                        </div>

                        <div className='bg-slate-100 pl-7 py-8'>
                            <p className='flex items-center text-indigo-600'>Contact Us <a href="tel:5629667406"><FaHeadset className='w-8 ml-2' /></a> <a href="mailto:csr@vertex4solutions.net" style={{ "textDecoration": "none" }}><FaMailBulk /></a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CareersTab