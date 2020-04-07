import React from "react"
import { Heading } from "../common/Heading"
import { services } from "../data/dummydata"

export const ServicesPageVolume = () => {
  return (
    <>
      <section className='services'>
        <div className='container'>
          <Heading title="Check Out Vertex Solutions's Full Range of Truckload Shipping Solutions" />
          <div className='content grid3'>
            {services.map((item) => (
              <div className='box' data-aos='flip-left'>
                <i>{item.icon}</i>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}


export default ServicesPageVolume;