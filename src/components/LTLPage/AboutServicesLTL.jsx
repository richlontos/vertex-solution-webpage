import React from "react"
import { Heading } from "../common/Heading"
import { aboutLTL } from "../data/dummydata"

export const AboutServicesLTL = () => {
  return (
    <>
      <section className='aboutSection'>
        <div className='containerService flex'>
          {aboutLTL.map((val) => (
            <>
              <div className='left' data-aos='fade-down-right'>
                <img src={val.cover} alt='' />
              </div>
              <div className='right' data-aos='fade-down-left'>
                <Heading title='LESS THAN TRUCKLOAD (LTL)' />
                <p>{val.desc}</p>
                <p>{val.desc1}</p>
              </div>
              
            </>
          ))}
        </div>
      </section>
    </>
  )
}


export default AboutServicesLTL;