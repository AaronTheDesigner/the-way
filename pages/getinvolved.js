import React from 'react'
import Padding from '../components/Padding'
import Layout from '../components/Layout'
import Header from '../components/Elements/Header'
import Pray from '../components/Pages/Involved/Pray'
import Block from '../components/Pages/Beliefs/Block'
import Contact from '../components/Contact'
import Title from '../components/Elements/Title'

const join = {
  bg: 'bg-pale',
  hn: 'next',
  tc: 'text-primary',
  text: 'Come join us! While you’re praying for us, start asking God if He’d like for you to come help us in person. We are happy to receive short-term and long-term helpers. This is a great place for your church or family to serve in another country. Does your team have a specific passion or calling? Check out our ministries page! We want you get involved in the wonderful work that God is already doing here and have many different ministries that churches and groups can choose to be a part of. We work alongside local churches so that there will be someone to follow up with the people that you will be ministering to and evangelizing. We strongly believe that it wouldn’t be a successful mission trip if we or a local church didn’t continue to build a relationship with these people. We will set up your mission trip according to your calling, passion, or the area that your team is interested in. We will organize everything: lodging, food, transportation, ministry schedule, etc'
}

const getinvolved = () => {
  return (
    <Layout>
      <Padding>
      <div className='h-screen w-full grid place-items-center inv-top'>        
        <Title name="Get Involved" color="text-white" className="" />   
      </div>
      <Pray/>
      <Block bg={join.bg} headerName={join.hn} textColor={join.tc} text={join.text} />
      <Contact />
      </Padding>
    </Layout>
  )
}

export default getinvolved