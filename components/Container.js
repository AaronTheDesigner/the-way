import React from 'react'

const Container = ({ children }) => {
  return (
    <div className='lg:px-40 md:px-12 xl:px-48'>
        {children}
    </div>
  )
}

export default Container