import React from 'react'

// components
import Banner from '../components/Banner'
import Content from '../components/Elements/Content'
import Layout from '../components/Layout'
import Padding from '../components/Padding'

// elements
import Header from '../components/Elements/Header'
import P from '../components/Elements/P'

//page elements
import Quote from '../components/Pages/About/Quote'
import Section from '../components/Pages/About/Section'
import Parallax from '../components/Pages/About/Parallax'
import Journey from '../components/Pages/About/Journey'
import Forest from '../components/Pages/About/Forest'
import Closing from '../components/Pages/About/Closing'
import Title from '../components/Elements/Title'


const about = () => {
  return (
    <Layout>
      <Padding>
      <div className='h-screen w-full grid place-items-center about-top'>        
        <Title name="About Us" color="text-primary" className="" />   
      </div>
      <Content>      
        <Header color="text-primary" name="our heart" />
        <P>The Way International Missions is founded on John 14:6,</P>        
      </Content>
      <Quote/>
      <Content>
        <Section/>
      </Content>
      <Parallax/>
      <Journey/>
      <Forest />
      <Closing/>
      </Padding>
      
    </Layout>
    
  )
}

export default about