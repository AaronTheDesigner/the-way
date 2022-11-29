import React from 'react'
import Header from './Elements/Header'
import Button from './Elements/Button'

const content = "By contributing, you will be helping children and families in need. Your suppot will further God’s Kingdom and change many lives. Thank you so much for your generosity."

const Donate = () => {
  return (
        <div className="flex flex-col mt-20 md:flex-row h-full md:items-center">
          <div className="flex flex-col">
            <Header name="Contribute" color="text-primary"/>
            <p className="font-body font-medium mt-2 md:mr-5 lg:text-lg lg:mt-4 xl:text-2xl xl:mt-6">
              {content}
            </p>
          </div>
          <div className='mt-6 h-full md:mt-0'>
            <Button name="Give" />
          </div>
        </div>   
  )
}

export default Donate