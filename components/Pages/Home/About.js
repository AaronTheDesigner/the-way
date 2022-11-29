import React from 'react'
import Link from 'next/link'
import Button from '../../Elements/Button'
import Container from '../../Elements/Container'
import Content from '../../Elements/Content'
import Header from '../../Elements/Header'
import P from '../../Elements/P'

const content = "The geographical focus of our ministry is in the city of San Ramon, Costa Rica as well as other parts of the country. Our goal is to show people the Way and the Truth, pointing people to Jesus in love by building relationships that last. We believe that the only way to make a difference in people's lives is to understand God's love and mercy and give others the same grace that we have received. It is vital for us to see people with the same compassion that Jesus sees them with."

const About = () => {
  return (
    <Container>
        <Content>
            <div className="flex flex-col">
                <Header name="About Us" color="text-primary"/>
                <div className="flex flex-col">
                    <div className="mb-3">
                        <P>
                            {content}
                        </P>
                    </div>
                    <div className="">
                        <P className="">
                            “Jesus said to him, <div className='text-secondary inline'>I am the way, and the truth, and the life. No one comes to the Father except through me</div>.”
                            <br />
                            -John 14:6
                        </P>
                        <div className="mt-3">
                            <Link href="/beliefs">
                                <Button name="More"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>            
        </Content>
    </Container>
    
        
    
    
  )
}

export default About