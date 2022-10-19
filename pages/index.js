import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Padding from '../components/Padding'

export default function Home() {
  return (
    <Layout>
      <Padding>
      <div className='h-screen bg-primary w-full'>
          <h1 className="text-white">
            Content
          </h1>
        </div>
      </Padding>

      
      
    </Layout>
      
    
  )
}
