import React from 'react'

const SubHeader = (props) => {
  return (
    <h2 className='font-display uppercase text-primary lg:text-xl xl:text-2xl'>
        {props.name}
    </h2>
  )
}

export default SubHeader