import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Elements/Header'
import Layout from '../components/Layout'
import Padding from '../components/Padding'
import About from '../components/Pages/Home/About'
import Ministries from '../components/Pages/Home/Ministries'
import pic from '../public/images/the-way-main.svg'

export default function Home() {
  return (
    <Layout>
      <Padding>
        <div className='h-screen w-full'>
          <Banner pic={pic}/>          
        </div>
        <About/>
        <Ministries />
      </Padding>

      
      
    </Layout>
      
    
  )
}
