import React from 'react'
import Container from './Container'
import Content from './Content'
import Button from './Button'
import Donate from './Donate'


const Contact = () => {
  return (
    <div className='contact'>
      <Container>
        <Content>
          <h1 className="font-display uppercase text-2xl text-primary lg:text-5xl xl:text-7xl">
            Join Us
          </h1>
          <form action="" className='flex flex-col w-full items-center lg:items-between mt-4'>
            <div className="flex flex-col justify-center w-full items-center md:flex-row">
              {/* left */}
              <div className="flex flex-col lg:w-1/2">
                <label className='font-display uppercase text-primary lg:text-xl'>
                  First Name
                </label>
                <div className="py-2">
                  <input type="text" name="" id="" className='lg:w-full'/>
                </div>
                <label className='font-display uppercase text-primary lg:text-xl'>
                  last name
                </label>
                <div className="py-2">
                  <input type="text" name="" id="" className='lg:w-full'/>
                </div>
              </div>
              {/* right */}
              <div className="flex flex-col md:ml-5 lg:w-1/2">
                <label className='font-display uppercase text-primary lg:text-xl'>
                  country
                </label>
                <div className="py-2">
                  <input type="text" name="" id="" className='lg:w-full' />
                </div>
                <label className='font-display uppercase text-primary lg:text-xl'>
                  email
                </label>
                <div className="py-2">
                  <input type="email" name="" id="" className='lg:w-full' />
                </div>
              </div>              
            </div>
            <div className="w-full flex justify-center lg:mt-3 xl:mt-7">
              <button type="submit" className=''>
                  <Button name="Submit" />
              </button>
            </div>            
          </form>
          <Donate/>
        </Content>
      </Container>
      
    </div>
  )
}

export default Contact