import React from 'react'
import FullNav from './FullNav'
import MobileNav from './MobileNav'
import Container from './Container'
import Contact from './Contact'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div>
      <MobileNav/>
      <FullNav/>      
      <Container>
        {children}
        <Contact/>
        <Footer/>
      </Container>
      
    </div>
    
  )
}

export default Layout