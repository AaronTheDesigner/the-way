import React from 'react'
import Header from '../../Elements/Header'
import Content from '../../Elements/Content'
import P from '../../Elements/P'

const paraOne = "I’m from Costa Rica and my wife Meghan is from North Carolina. Everything started in 2012 when we attended the same missionary school in San José, Costa Rica. We stayed on as staff for a short time and got married a few months later. We then went to Panama as missionaries to work with people from indigenous tribes."

const paraTwo = "God gave me (Obed) the desire to be a missionary that same year. He saved me from drug addictions that were so bad that I had to go to a rehab center multiple times. All of this caused years of pain and suffering for me and my family. The last time that I entered rehab, my brother told me that if I could complete the whole program of 6 months, he would take me to attend a missionary school. By God’s grace I did finish and 2 months later I started the school. It was not easy. I was still full of things from my old life, but God used that school to break me and make me a new person. He gave me the desire to serve Him. I still remember it like it was yesterday, the night when I was in my room on my knees begging God to change me, and that night I surrendered my life to Him. The process was not easy after that. God had to change so many things in my life and is still working on me to this day. But since that night, my life has never been the same. Meghan, on the other hand, was always in church and ever since she was a little girl, her dream was to become a missionary. As a child and teenager, she used to watch movies about missionaries, attend mission groups, and go on short-term mission trips. That has always been her passion."

const Journey = () => {
  return (
    <div>
        <Content>
            <Header color="text-primary" name="the journey"/>
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

export default Journey