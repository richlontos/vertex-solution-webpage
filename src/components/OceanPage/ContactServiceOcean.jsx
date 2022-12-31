import React from "react"
import { Heading } from "../common/Heading"
import { contact } from "../data/dummydata"

export const ContactServicesOcean = () => {
  return (
    <>
      <div className='contact'>
        <div className='container'>
          <Heading title='Contact Usw' />
          <div className='content flexsb'>
            <div className='right'>
              <form>
                <div className='flex'>
                  <input type='text' placeholder='Name' data-aos='flip-left' />
                  <input type='email' placeholder='Email' data-aos='flip-right' />
                </div>
                <input type='email' placeholder='Subject' data-aos='flip-up' />
                <textarea name='' id='' cols='30' rows='10' data-aos='flip-down'></textarea>
                <button style={{'backgroundColor':'rgba(255, 255, 255, 0.1)', 'border':'1px solid rgba(255, 255, 255, 0.5)', 'color':'white'}} data-aos='zoom-in-up'>Submit</button>
              </form>
            </div>
            <div className='left'>
              {contact.map((item) => (
                <div className='box' data-aos='zoom-in'>
                  <i>{item.icon}</i>
                  <p>{item.text1}</p>
                  <p>{item.text2}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactServicesOcean;