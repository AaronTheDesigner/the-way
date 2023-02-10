import React from 'react'
import Banner from '../components/Banner'
import Content from '../components/Elements/Content'
import Layout from '../components/Layout'
import Padding from '../components/Padding'
import pic from '../public/images/hands.svg'
import Header from '../components/Elements/Header'
import P from '../components/Elements/P'


const about = () => {
  return (
    <Layout>
      
      <div className='h-screen w-full relative'>
        <Banner pic={pic}/>
      </div>
      <Content>
        <Header color="text-primary" name="our heart" />
        <P>The Way International Missions is founded on John 14:6,</P>
      </Content>
      
    </Layout>
    
  )
}

export default about