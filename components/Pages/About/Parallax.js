import React from 'react'
import P from '../../Elements/P'

const Parallax = () => {
  return (
    <div className='about-para text-white py-3 px-2 sm:py-12 sm:px-6 lg:py-20 lg:px-10 xl:py-36 xl:px-40'>
      <P>
        <div className="uppercase">
          ... And the king will answer them, <span className='text-pale'>truly, I say to you, as you did it to one of the least of these my brothers, you did it to me.</span>
        </div>
        <div className='text-right'>
          - Matthew 35:40
        </div>        
      </P>
    </div>
  )
}

export default Parallax