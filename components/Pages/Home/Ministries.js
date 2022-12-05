import Image from 'next/image'
import React from 'react'
import Content from '../../Elements/Content'
import Header from '../../Elements/Header'
import P from '../../Elements/P'

import pic from '../../../public/images/kids_2.svg'
import Button from '../../Elements/Button'

const content = "The geographical focus of our ministry is in the city of San Ramon, Costa Rica as well as other parts of the country. Our goal is to show people the Way and the Truth, pointing people to Jesus in love by building relationships that last."

const Ministries = () => {
  return (
    <div className='bg-primary'>
            <div className="flex flex-col md:flex-row w-full">
                {/* pic */}
                <div className='md:6/12'>
                    <Image 
                        lazy="true"
                        src={pic}
                    />
                </div>              
                {/* content */}
                <div className="md:w-10/12">
                
                <div className='flex flex-col'>
                    <div className="">
                        <Header name="Ministries" color="text-white" />
                    </div>                    
                    <div className="text-white mb-4">
                        <P>
                            {content}
                        </P>
                    </div>
                    <div className="flex justify-between uppercase text-white mb-4">
                        <ul className=''>
                            <li>Youth Nights</li>
                            <li>Vacation Bible School</li>
                            <li>Childrens Ministry</li>
                            <li>Drug Addiciton Ministry</li>
                        </ul>
                        <ul>
                            <li>Homeless Ministry</li>
                            <li>Mercy Ministry</li>
                            <li>Construction Ministry</li>
                            <li>Community Ministry</li>
                        </ul>
                    </div>
                    <div className='mb-5'>
                        <button type="submit">
                            <Button name="More"/>
                        </button>
                    </div>
                </div>
                    
                    {/* title */}

                    {/* paragraph */}

                    {/* list */}

                    {/* link */}
                
                </div>
            </div>
    </div>
  )
}

export default Ministries