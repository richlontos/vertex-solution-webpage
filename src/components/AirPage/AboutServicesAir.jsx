import React from "react"
import { Heading } from "../common/Heading"
import { aboutAir } from "../data/dummydata"

export const AboutServicesAir = () => {
  return (
    <>
      <section className='aboutSection'>
        <div className='containerService flex'>
          {aboutAir.map((val) => (
            <>
              <div className='left' data-aos='fade-down-right'>
                <img src={val.cover} alt='' />
              </div>
              <div className='right' data-aos='fade-down-left'>
                <Heading title='AIR' />
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


export default AboutServicesAir;