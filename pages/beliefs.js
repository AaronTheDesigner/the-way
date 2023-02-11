import React from 'react'
import Layout from '../components/Layout'
import Padding from '../components/Padding'
import Block from '../components/Pages/Beliefs/Block'
import Header from '../components/Elements/Header'

const father = {
  bg: 'bg-primary',
  tc: 'text-white',
  hn: 'god the father',
  text: "There is one true, living GOD who created Everything. He exists in trinity: Father, Son and Holy Spirit.",
}

const jesus = {
  bg: 'bg-pale',
  tc: 'text-primary',
  hn: 'jesus christ',
  text: 'Jesus Christ is the Son of God. He is fully God and fully man. He is the promised Messiah who came to save people from their sins, bringing those who trust Him into right relationship with the Father. He lived a perfect, sinless life and offered Himself as the perfectly complete sacrifice for the sins of all people by dying on a cross, rising again three days later. He ascended into heaven and is at the right hand of the Father. He will return to earth to reign as King of kings and Lord of lords.'
}

const holy = {
  bg: 'bg-white',
  tc: 'text-primary',
  hn: 'holy spirit',
  text: 'The Holy Spirit is the Helper who Jesus promised to send before He ascended into heaven. He lives in and seals every Believer from the moment of salvation and gives them the power to live a godly and holy life. '
}

const bible = {
  bg: 'bg-primary',
  tc: 'text-white',
  hn: 'the bible',
  text: "The Old and New Testaments are God-breathed/inspired and are infallible, inerrant, and authoritative in their original text. The Bible is God’s word written by human authors under the supernatural guidance of the Holy Spirit. It is the supreme source of truth for Christian belief, showing mankind the way of a right relationship with God."
}

const people = {
  bg: 'bg-pale',
  tc: 'text-primary',
  hn: 'people',
  text: 'Men and women are made in the image of God. We are the pinnacle of God’s creation, made for the purpose of worshipping and having a relationship with Him. Although God’s original creation was good we have been marred by sin-disobedience toward God, which separates us from Him. Therefore, we are all in need of salvation.'
}

const salvation = {
  bg: 'bg-white',
  tc: 'text-primary',
  hn: 'salvation',
  text: 'Salvation is God’s free gift to those who trust and believe. Forgiveness of sin can never be earned by anything we do. We can only be forgiven by trusting in Jesus Christ as God’s perfect sacrifice. The Holy Spirit helps us in making our commitment to Him as Savior and Lord'
}

const eternity = {
  bg: 'bg-primary',
  tc: 'text-white',
  hn: 'eternity',
  text: "People will live forever. We will either exist eternally separated from God by sin in hell, or eternally with God in heaven. Heaven and hell are real places of eternal existence"
}

const beliefs = () => {
  return (
    <Layout>
      <Padding>
        <div className='h-screen w-full grid place-items-center beliefs-top'>        
          <Header name="Our Beliefs" color="text-white" className="" />   
        </div>
        <Block bg={father.bg} headerName={father.hn} textColor={father.tc} text={father.text} />
        <Block bg={jesus.bg} headerName={jesus.hn} textColor={jesus.tc} text={jesus.text} />
        <Block bg={holy.bg} headerName={holy.hn} textColor={holy.tc} text={holy.text} />
        <Block bg={bible.bg} headerName={bible.hn} textColor={bible.tc} text={bible.text} />
        <Block bg={people.bg} headerName={people.hn} textColor={people.tc} text={people.text} />
        <Block bg={salvation.bg} headerName={salvation.hn} textColor={salvation.tc} text={salvation.text} />
        <Block bg={eternity.bg} headerName={eternity.hn} textColor={eternity.tc} text={eternity.text} />
      </Padding>
    </Layout>
  )
}

export default beliefs