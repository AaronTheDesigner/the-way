import React from 'react'
import Container from './Elements/Container'
import Content from './Elements/Content'
import Button from './Elements/Button'
import SubHeader from './Elements/SubHeader'
import Donate from './Donate'
import Header from './Elements/Header'


const Contact = () => {
  return (
    <div className='contact'>
      <Container>
        <Content>
          <Header name="Join Us" color="text-primary" />
          <form action="" className='flex flex-col w-full items-center lg:items-between mt-4'>
            <div className="flex flex-col justify-center w-full items-center md:flex-row">
              {/* left */}
              <div className="flex flex-col lg:w-1/2">
                <label>
                  <SubHeader name="first name" />
                </label>
                <div className="py-2">
                  <input type="text" name="" id="" className='lg:w-full'/>
                </div>
                <label>
                  <SubHeader name="last name" />
                </label>
                <div className="py-2">
                  <input type="text" name="" id="" className='lg:w-full'/>
                </div>
              </div>
              {/* right */}
              <div className="flex flex-col md:ml-5 lg:w-1/2">
                <label>
                  <SubHeader name="country" />
                </label>
                <div className="py-2">
                  <input type="text" name="" id="" className='lg:w-full' />
                </div>
                <label>
                  <SubHeader name="email" />
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