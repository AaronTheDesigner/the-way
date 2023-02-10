import React from 'react'
import Banner from '../components/Banner'
import Layout from '../components/Layout'
import Padding from '../components/Padding'
//page
import Top from '../components/Pages/Ministries/Top'
import Intro from '../components/Pages/Ministries/Intro'
import Youth from '../components/Pages/Ministries/Youth'
import YouthList from '../components/Pages/Ministries/YouthList'
import Outreach from '../components/Pages/Ministries/Outreach'
import OutReachList from '../components/Pages/Ministries/OutReachList'
import Support from '../components/Pages/Ministries/Support'
import SupportList from '../components/Pages/Ministries/SupportList'

const ministries = () => {
  return (
    <Layout>
      <Padding>
        <Top />
        <Intro/>
        <Youth/>
        <YouthList/>
        <Outreach/>
        <OutReachList/>
        <Support/>
        <SupportList/>
      </Padding>
    </Layout>
  )
}

export default ministries