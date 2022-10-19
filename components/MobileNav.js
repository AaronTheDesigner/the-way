import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from './Container';
import icon from '../public/images/the-way-icon.svg'
import menu from '../public/images/menu.svg'

const MobileNav = () => {
  const [open, setOpen] = useState(false);  
  
  const toggleOpen = () => {
    if (open === false) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }

  const Panel = ({children}) => {
    if (open === false) {
      return (
        <div className='md:invisible md:-z-10 drop-shadow-md bg-white -translate-y-48 fixed top-0 left-0 z-50 w-full font-nav uppercase text-xs'>
          {children}
        </div>
      )
    } else {
      return (
        <div className='md:invisible md:-z-10 drop-shadow-md bg-white fixed top-0 left-0 z-50 w-full font-nav uppercase text-xs'>
          {children}
        </div>
      )
    }
    
  }

  return (
    <Panel className="">
      <Container className="">
        <div className="bg-white flex flex-col px-5">
          <div className="flex h-10 justify-center items-center w-full">
            <Link href="/">
              Home
            </Link>
          </div>
          <div className="flex h-10 justify-center items-center w-full">
            <Link href="/about">
              About
            </Link>
          </div>
          <div className="flex h-10 justify-center items-center w-full">
            <Link href="/beliefs">
              Beliefs
            </Link>
          </div>
          <div className="flex h-10 justify-center items-center w-full">
            <Link href="/ministries">
              Ministries
            </Link>
          </div>
          <div className="flex h-10 justify-center items-center w-full">
            <Link href="/getinvolved">
              Get Involved
            </Link>
          </div>
          <div className="flex h-full justify-between align-middle items-center pb-2 w-full ">
            <div className='flex items-center'>
              <div className="w-9  ">
                <Image
                  src={icon}
                  alt="The Way Icon"
                  className=''
                />
              </div>              
              <p className='font-display text-center text-primary '>
                The Way
              </p>
            </div>
            
            <div onClick={() => {toggleOpen()}} className="">
              <div className=' translate-y-0.5 w-7 '>
                <Image
                  src={menu}
                  alt="Menu"
                  className=''
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Panel>
      
    
  )
}

export default MobileNav