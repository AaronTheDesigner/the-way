import React from 'react'
import P from '../../Elements/P'

const Quote = () => {

  return (
    <div className='bg-primary text-white py-3 px-2 sm:py-6 sm:px-6 lg:p-10 xl:py-12 xl:px-40'>
      <P>
        <div className="uppercase">
          ... Jesus said to him, <span className='text-pale'>I am <span className='underline'>the way</span>, and the truth, and the life. no one comes to the father except through me.</span>
        </div>
        <div className='text-right'>
          - John 14:6
        </div>
        
      </P>
    </div>
  )
}

export default Quote