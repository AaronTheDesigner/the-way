import React from 'react'
import Container from './Elements/Container'
import Image from 'next/image'
import Link from 'next/link'
import icon from '../public/images/the-way-icon.svg'

const FullNav = () => {
  return (
    
      <div className='fixed top-0 left-0 invisible -z-10 md:visible md:z-50 w-full bg-white drop-shadow-md'>
        <Container>
        <div className="flex justify-between">
          <div className="w-16">            
              <Image
                src={icon}
              />            
          </div>
          <div className="flex font-nav uppercase">            
              <Link href="/">
                <a className="h-full px-6 md:text-xs lg:text-sm grid place-items-center hover:bg-primary hover:text-white transition-colors">
                  Home
                </a>
              </Link>
              <Link href="/about">
                <a className="h-full px-6 md:text-xs lg:text-sm grid place-items-center hover:bg-primary hover:text-white transition-colors">
                  About
                </a>
              </Link>
              <Link href="/beliefs">
                <a className="h-full px-6 md:text-xs lg:text-sm grid place-items-center hover:bg-primary hover:text-white transition-colors">
                  Beliefs
                </a>
              </Link>
              <Link href="/ministries">
                <a className="h-full px-6 md:text-xs lg:text-sm grid place-items-center hover:bg-primary hover:text-white transition-colors">
                  Ministries
                </a>
              </Link>
              <Link href="/getinvolved">
                <a className="h-full px-6 md:text-xs lg:text-sm grid place-items-center hover:bg-primary hover:text-white transition-colors">
                  Get Involved
                </a>
              </Link>
          </div>
        </div>
        </Container>
      </div>
    
  )
}

export default FullNav