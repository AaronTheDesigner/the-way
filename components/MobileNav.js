import React from 'react'
import Link from 'next/link'
import Container from './Container'

const MobileNav = () => {
  return (
    <Container>
      <div className="bg-white flex flex-col px-5">
        <div className="flex h-10 justify-center items-center w-full">Home</div>
        <div className="flex">About</div>
        <div className="flex">Beliefs</div>
        <div className="flex">Ministries</div>
        <div className="flex">Get Involved</div>
      </div>
    </Container>
  )
}

export default MobileNav