import React from 'react'

const P = ({children}) => {
  return (
        <p className="font-body font-medium mt-2 md:mr-5 lg:text-lg lg:mt-4 xl:text-2xl xl:mt-6">
            {children}
        </p>
  )
}

export default P