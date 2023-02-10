import React from 'react'
import P from '../../Elements/P'
import Content from '../../Elements/Content'

const paraOne = "We had to go back to the United States to start the residency process for myself. Soon after, we were able to start working with a youth Bible study group. But on a trip that we took to Costa Rica two years later, God spoke to us about starting a ministry in Costa Rica."

const paraTwo = "He gave us the passion and the vision to use the gifts and talents that He has given us. A couple years later He gave us the opportunity to buy land in Costa Rica and just one year later the land was paid off with plans to start building our future home. From the time that He spoke to us until the time that we were able to move there, about 5 years had passed. It has been a journey but today we have 3 beautiful babies and are working for the Lord.  We have seen God work in many ways. He has always been faithful, and we want to continue to faithfully serve Him."

const Closing = () => {
  return (
    <div className='mb-12'>
        <Content>
            <P>
                {paraOne}
            </P>
            <P>
                {paraTwo}
            </P>
        </Content>        
    </div>
    
  )
}

export default Closing