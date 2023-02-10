import React from 'react'
import SubHeader from '../../Elements/SubHeader'
import P from '../../Elements/P'
import Content from '../../Elements/Content'

const paraOne = "We have a fun day for kids where they get to play games, enjoy snacks, do arts and crafts, and hear a story from the Bible in an engaging and fun way."

const paraTwo = "Vacation Bible School is part of our children’s ministry. It is one of the methods we use to reach out to the community as we try to focus on kids that are not part of a church. It’s a great way to give children a chance to see what it’s like to be part of a Christ-centered community. We desire to impact their lives by showing them God’s great love for them and teaching them that they were designed for a purpose bigger than what they know."

const paraThree = "We need to invest in kids and young people and one way of doing this is, not only to build relationships with them, leading them to Christ, but also providing a safe place to have fun away from the temptations of the world."

const YouthList = () => {
  return (
    <Content>
      <SubHeader name="children's ministry" />  
      <div className="mb-8">
        <P>
          {paraOne}
        </P>
      </div>      
      
      <SubHeader name="vacation bible school" />        
      <div className="mb-8">
        <P>
          {paraTwo}
        </P>
      </div>  
      <SubHeader name="youth nights" />        
      <div className="mb-8">
        <P>
          {paraThree}
        </P>
      </div>  
    </Content>
  )
}

export default YouthList