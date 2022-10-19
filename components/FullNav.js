import React from 'react'
import Container from './Container'
import Image from 'next/image'
import Link from 'next/link'
import icon from '../public/images/the-way-icon.svg'

const FullNav = () => {
  return (
    
      <div className='fixed top-0 left-0 invisible -z-10 md:visible md:z-50 w-full bg-white drop-shadow-md h-16'>
        <Container>
        <div className="h-full flex justify-between">
          <div className="w-16">            
              <Image
                src={icon}
              />            
          </div>
          <div className="flex nav-full">

          </div>
        </div>
        </Container>
      </div>
    
  )
}

export default FullNav