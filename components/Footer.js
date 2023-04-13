import React from 'react'
import Link from 'next/link'
import Content from './Elements/Content'
import Container from './Elements/Container'
import Image from 'next/image'

import img from '../public/images/the-way-main.svg'

import Padding from './Padding'
import P from './Elements/P'


const text_one = "Thank you for your interest in giving!"

const text_two = "The Way International Missions is a Registered 501C3. All donations are tax deductable"

const Footer = () => {
  return (
    <Container>
        <Content>
          <div className="flex">
            <div className="flex flex-col w-1/2">
            <Link href="/">
                  <a className="md:text-xs lg:text-sm hover:bg-primary hover:text-white transition-colors">
                    Home
                  </a>
                </Link>
                <Link href="/about">
                  <a className="md:text-xs lg:text-sm hover:bg-primary hover:text-white transition-colors">
                    About
                  </a>
                </Link>
                <Link href="/beliefs">
                  <a className="md:text-xs lg:text-sm hover:bg-primary hover:text-white transition-colors">
                    Beliefs
                  </a>
                </Link>
                <Link href="/ministries">
                  <a className="md:text-xs lg:text-sm hover:bg-primary hover:text-white transition-colors">
                    Ministries
                  </a>
                </Link>
                <Link href="/getinvolved">
                  <a className="md:text-xs lg:text-sm hover:bg-primary hover:text-white transition-colors">
                    Get Involved
                  </a>
                </Link>
            </div>
            <div className="flex flex-col w-1/2">
                <div className="w-full">
                  <Image
                    src={img}
                    position="relative"
                    objectFit='contain'

                  />
                </div>
            </div>
          </div>
        </Content>
        <div className="bg-pale text-primary">
            <P>{text_one}</P>
            <P>{text_two}</P>
          </div>
    </Container>
      
    
    
  )
}

export default Footer