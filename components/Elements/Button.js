import React from 'react'

const Button = (props) => {
  return (
    <div className='button grid place-content-center shadow-lg'>
        <h1 className="font-display uppercase tracking-widest shadow-md">
            {props.name}
        </h1>    
    </div>
  )
}

export default Button