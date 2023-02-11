import React from 'react'
import Header from '../../Elements/Header'
import P from '../../Elements/P'
import Button from '../../Elements/Button'

const content = 'We NEED you and the believers you know to be keeping our family, staff, and ministry in your daily prayers. We so often forget how powerful and effective the prayers of the righteous are. Feel free to contact us if you would like specific prayer requests at any given time- we’d love to hear from you! Thank you!'

const Pray = () => {
  return (
    <div className='bg-primary md:h-96'>
    <div className="flex flex-col md:flex-row w-full h-full ">
        {/* pic */}
        <div className='md:w-4/12 h-48 md:h-full bg-kids-2 bg-no-repeat bg-cover bg-center'>
            {/* <Image 
                lazy="true"
                src={pic}
            /> */}
        </div>              
        {/* content */}
        <div className="md:w-8/12">
        
        <div className='flex flex-col md:ml-10'>
            <div className=" md:mt-5">
                <Header name="First: Pray" color="text-white" />
            </div>                    
            <div className="text-white mb-4">
                <P>
                    {content}
                </P>
            </div>
            <div className='mb-5'>
               
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

export default Pray