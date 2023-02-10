import React from 'react'
import Content from '../../Elements/Content'
import Header from '../../Elements/Header'
import P from '../../Elements/P'

const para = "The geographical focus of our ministry is in the city of San Ramon, Costa Rica as well as other parts of the country. Our goal is to show people the Way and the Truth, pointing people to Jesus in love by building relationships that last."

const Intro = () => {
  return (
    <Content>
      <Header color="text-primary" name="our focus"/>
      <P>
        {para}
      </P>
    </Content>
  )
}

export default Intro