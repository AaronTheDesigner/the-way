import React from 'react'

const SubHeader = (props) => {
  return (
    <h2 className='font-display uppercase text-primary text-xl lg:text-3xl xl:text-4xl'>
        {props.name}
    </h2>
  )
}

export default SubHeader