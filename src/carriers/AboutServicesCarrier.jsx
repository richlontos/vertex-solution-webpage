import React from "react"
import { Heading } from "../components/common/Heading"
import { aboutCarrier } from "../components/data/dummydata"

export const AboutServicesCarrier = () => {
  return (
    <>
      <section className='aboutSection'>
        <div className='containerServiceCarrier  flex'>
          {aboutCarrier.map((val) => (
            <>
              
              <div className='right carrierBack' data-aos='fade-down-left'>
                <Heading title='Become a Vertex Solutions Carrier' />
                <h5>{val.desc}</h5>
                {/* <p>{val.desc1}</p> */}
              </div>
              
            </>
          ))}
        </div>
      </section>
    </>
  )
}


export default AboutServicesCarrier;