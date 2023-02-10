import React from 'react'
import SubHeader from '../../Elements/SubHeader'
import P from '../../Elements/P'
import Content from '../../Elements/Content'

const paraOne = "We normally focus on helping families live in better conditions by fixing parts of their houses, such as walls, roofs, floors, or building a new room. We basically try to make their houses a little more secure and comfortable than their current conditions. We also have a team member who selects these families."

const paraTwo = "Helping the community is a way to preach the gospel. We can make a difference in the community by helping paint schools, clean parks, visit nursing homes and even teaching English."

const OutReachList = () => {
  return (
    <Content>
      <SubHeader name="construction ministry" />  
      <div className="mb-8">
        <P>
          {paraOne}
        </P>
      </div>      
      
      <SubHeader name="community ministry" />        
      <div className="mb-8">
        <P>
          {paraTwo}
        </P>
      </div>  
    </Content>
  )
}

export default OutReachList