import React from 'react'
import { FaHeadset, FaMailBulk } from 'react-icons/fa';
import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline';
import { ChipIcon, SupportIcon } from '@heroicons/react/solid'
import supportImg from '../assets/support.jpg'



function CareerTabSupport() {
    return (
        <div name='support' className='w-full mt-24'>
            <div className='w-full h-[700px] bg-gray-900/90 absolute'>
                <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />
            </div>

            <div className='max-w-[1240px] mx-auto text-white relative'>
                <div className='px-4 py-12'>
                    <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Careers</h2>
                    <h3 className='text-5xl font-bold py-6 text-center'>Finding the right Job</h3>
                    <p className='py-4 text-2xl text-slate-300'>The world of logistics, as well as finding a career, offers many avenues. With Vertex Solutions, those avenues become the road that leads you home. Vertex Solutions cultivates the success of our people through continuous training and development while creating a dynamic working environment that allows our teams to thrive. As one of the fastest-growing 3PL’s in the nation, we take pride in making our employees our top priority.
                        We operate with a simple philosophy: combine incredibly talented, motivated, and diverse people with remarkable technology to disrupt the transportation space. Get started and find your career today!</p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <PhoneIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                            <h3 className='font-bold  my-6'>Account Executive</h3>
                            <p className='text-gray-600 text-xl'>We are seeking a Outside Sales Representative in the top growing industry, Transportation! Join our team if you are hungry to grow your own book of business with residual monthly commissions. You will prospect to generate new business and offer solutions to drive company revenue.</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4 '>
                            <p className=' text-indigo-600'>Contact Us</p>
                            <a href="tel:5629667406"><FaHeadset className='contactIcons' /></a> <a href="mailto:csr@vertex4solutions.net"><FaMailBulk className='contactIcons' /></a>
                        </div>

                    </div>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <ChipIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                            <h3 className='font-bold text-2xl my-6'>Freight Agent</h3>
                            <p className='text-gray-600 text-xl'>For the entrepreneurs looking to become financially free or be their own boss, this might be the smartest choice you have ever made. We love to work with agents that are ambitious and always looking for ways to improve sales.</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4 my-5'>
                            <p className='flex items-center text-indigo-600'>Contact Us <ArrowSmRightIcon className='w-5 ml-2' /></p>
                            <a href="tel:5629667406"><FaHeadset className='contactIcons' /></a> <a href="mailto:csr@vertex4solutions.net"><FaMailBulk className='contactIcons' /></a>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <ChipIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                            <h3 className='font-bold text-2xl my-6'>Customer Service Representative</h3>
                            <p className='text-gray-600 text-xl'>Hauling freight requires a collaborative approach to achieve a shared goal – delivery. And for that reason, you need a freight broker that is reliable, responsive and provides the carrier resources to ensure success.</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4 my-4'>
                            <p className='flex items-center text-indigo-600'>Contact Us <ArrowSmRightIcon className='w-5 ml-2' /></p>
                            <a href="tel:5629667406"><FaHeadset className='contactIcons' /></a> <a href="mailto:csr@vertex4solutions.net"><FaMailBulk className='contactIcons' /></a>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <ChipIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                            <h3 className='font-bold text-2xl my-6'>Billing Clerk</h3>
                            <p className='text-gray-600 text-xl'>Hauling freight requires a collaborative approach to achieve a shared goal – delivery. And for that reason, you need a freight broker that is reliable, responsive and provides the carrier resources to ensure success.</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4'>
                            <p className='flex items-center text-indigo-600'>Contact Us <ArrowSmRightIcon className='w-5 ml-2' /></p>
                            <a href="tel:5629667406"><FaHeadset className='contactIcons' /></a> <a href="mailto:csr@vertex4solutions.net"><FaMailBulk className='contactIcons' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    // <div name='support' className='careerTab'>
    //     <div className='w-full h-[700px] bg-gray-900/90 absolute'>
    //         <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />
    //     </div>

    //     <div className='flex-Wrap  mx-auto text-white relative'>
    //         <div className='px-4 py-12'>
    //             <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Careers</h2>
    //             <h3 className='text-5xl font-bold py-6 text-center'>Finding the right Job</h3>
    //             <p className='py-4 text-2xl text-slate-300'>The strength of Vertex Soluions will always be our people. By hiring the right people, delivering the right service and doing the right thing, Vertex Solutions has continuously exceeded the expectations of our employees, customers and carriers. It’s what we do together that sets us apart.</p>
    //         </div>


    //     <div>
    //         <div className='careerFlex text-black'>
    //             <div className='accountE bg-white rounded-xl shadow-2xl'>
    //                 <div className='p-8'>
    //                     <h2 className='font-bold  my-6'>Account Executive</h2>
    //                     <p className='text-gray-600 text-xl'>We are seeking a Outside Sales Representative in the top growing industry, Transportation! Join our team if you are hungry to grow your own book of business with residual monthly commissions. You will prospect to generate new business and offer solutions to drive company revenue.</p>
    //                 </div>
    //                 <div className='bg-slate-100 pl-8 py-15'>
    //                     <p className=' text-indigo-600'>Contact Us <a href="tel:5629667406"><FaHeadset className='w-8 ml-2' /></a> <a href="mailto:csr@vertex4solutions.net" style={{ "textDecoration": "none" }}><FaMailBulk /></a></p>
    //                 </div>
    //             </div>
    //             <div className='bg-white rounded-xl shadow-2xl'>
    //                 <div className='p-8'>
    //                     <h2 className='font-bold  my-6'>Freight Agent</h2>
    //                     <p className='text-gray-600 text-xl'>For the entrepreneurs looking to become financially free or be their own boss, this might be the smartest choice you have ever made. We love to work with agents that are ambitious and always looking for ways to improve sales.</p>
    //                 </div>
    //                 <div className='bg-slate-100 pl-8 py-15'>
    //                     <p className=' text-indigo-600'>Contact Us <a href="tel:5629667406"><FaHeadset className='w-8 ml-2' /></a> <a href="mailto:csr@vertex4solutions.net" style={{ "textDecoration": "none" }}><FaMailBulk /></a></p>
    //                 </div>
    //             </div>
    //         </div>
    //         <br />
    //         <div className='careerFlex text-black'>
    //              <div className='bg-white rounded-xl shadow-2xl'>
    //                 <div className='p-8'>
    //                     <h2 className='font-bold  my-6'>Customer Service Representative</h2>
    //                     <p className='text-gray-600 text-xl'>Hauling freight requires a collaborative approach to achieve a shared goal – delivery. And for that reason, you need a freight broker that is reliable, responsive and provides the carrier resources to ensure success.</p>
    //                 </div>

    //                 <div className='bg-slate-100 pl-7 py-8'>
    //                     <p className=' text-indigo-600'>Contact Us <a href="tel:5629667406"><FaHeadset className='w-8 ml-2' /></a> <a href="mailto:csr@vertex4solutions.net" style={{ "textDecoration": "none" }}><FaMailBulk /></a></p>
    //                 </div>
    //             </div> 
    //             <div className='bg-white rounded-xl shadow-2xl'>
    //                 <div className='p-8'>
    //                     <h2 className='font-bold  my-6'>Billing Clerk</h2>
    //                     <p className='text-gray-600 text-xl'>Hauling freight requires a collaborative approach to achieve a shared goal – delivery. And for that reason, you need a freight broker that is reliable, responsive and provides the carrier resources to ensure success.</p>
    //                 </div>

    //                 <div className='bg-slate-100 pl-7 py-8'>
    //                     <p className=' text-indigo-600'>Contact Us <a href="tel:5629667406"><FaHeadset className='w-8 ml-2' /></a> <a href="mailto:csr@vertex4solutions.net" style={{ "textDecoration": "none" }}><FaMailBulk /></a></p>
    //                 </div>
    //             </div> 
    //         </div>
    //         </div>


    //     </div>
    // </div>

}

export default CareerTabSupport