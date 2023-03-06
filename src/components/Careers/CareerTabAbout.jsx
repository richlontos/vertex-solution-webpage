import React from 'react'
import "../Careers/AboutStyle.css"

const CareerTabAbout = () => {
  return (
    <div name='about' className='wrapperCareer'>
        <div className='containerCareer'>
            <div className='titleDesc'>
                <h2 className='titleContent'>Benefits</h2>
            </div>

            <div className='lowerContainer'>
                <div>
                    <p className='text-6xl font-bold text-indigo-600'>100%</p>
                    <p className='text-gray-400 mt-2'>Completion</p>
                </div>
                <div >
                    <p className='text-6xl font-bold text-indigo-600'>24/7</p>
                    <p className='text-gray-400 mt-2'>Delivery</p>
                </div>
                <div>
                    <p className='text-6xl font-bold text-indigo-600'>100K</p>
                    <p className='text-gray-400 mt-2'>Transactions</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CareerTabAbout