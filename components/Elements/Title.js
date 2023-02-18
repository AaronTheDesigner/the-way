import React from 'react'

const Title = (props) => {
  return (
    <h1 className={`font-display drop-shadow-lg tracking-wide uppercase text-3xl ${props.color} lg:text-6xl xl:text-8xl`}>
        {props.name}
    </h1>
  )
}

export default Title