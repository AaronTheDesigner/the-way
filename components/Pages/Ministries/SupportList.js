import React from 'react'
import Content from '../../Elements/Content'
import SubHeader from '../../Elements/SubHeader'
import P from '../../Elements/P'

const paraOne = "This ministry focuses on families who are in need. We have a team member who does a study to choose the families or individuals who are in the most need. These could be families with kids whose parents don’t have sufficient income, older adults who are unable to work, disabled people, or people who are passing through a difficult time. We can help them by buying food for them, paying a month of rent or bills, buying notebooks or school uniforms for their children, teaching them a way for them to succeed on their own by helping them find a job or showing them how to use their land to plant their own food. All of this helps build relationships with these people and connect with them so that we can preach and live out the gospel before their eyes."

const paraTwo = "The purpose of these ministries is to help those who the society doesn’t see as people, but as burdens. We minister to recovering addicts who are in rehab centers by sharing Christ, praying for them, and encouraging them through the Word. We also help the homeless through evangelism and physical needs such as food. Even just sitting down to listen to someone’s story can be life-changing for them."

const SupportList = () => {
  return (
    <Content>
      <SubHeader name="mercy ministry" />  
      <div className="mb-8">
        <P>
          {paraOne}
        </P>
      </div>      
      
      <SubHeader name="drug addiction and homeless ministries" />        
      <div className="mb-8">
        <P>
          {paraTwo}
        </P>
      </div>  
    </Content>
  )
}

export default SupportList