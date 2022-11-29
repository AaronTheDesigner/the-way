import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Layout from '../components/Layout'
import Padding from '../components/Padding'
import About from '../components/Pages/Home/About'
import pic from '../public/images/the-way-main.svg'

export default function Home() {
  return (
    <Layout>
      <Padding>
        <div className='h-screen w-full'>
          <Banner pic={pic}/>
        </div>
        <About/>
      </Padding>

      
      
    </Layout>
      
    
  )
}
