import React from "react"
import { Heading } from "./components/common/Heading"
import { faq } from "./components/data/dummydata"

export const FaqService = () => {
  return (
    <>
      <section className='aboutSection'>
        <div className='containerServiceCarrier  flex'>
          {faq.map((val) => (
            <>
              
              <div className='right carrierBack' data-aos='fade-down-left'>
                <Heading  title='FREQUENTLY ASKED QUESTIONS' />
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


export default FaqService;