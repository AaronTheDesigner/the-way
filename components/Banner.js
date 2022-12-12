import React from 'react'
import Image from 'next/image'


const Banner = (props) => {
  return (
    <div className="h-full">
      <div className="relative w-full h-full">
        <div className="relative w-full h-full -z-10">
          <Image 
            priority={true}
            src={props.pic}
            layout="fill"
            objectFit='cover'
            objectPosition='center'
          />
        </div>
      </div>
    </div>
    
  )
}

export default Banner