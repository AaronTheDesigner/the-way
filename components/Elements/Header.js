import React from 'react'

const Header = (props) => {
  return (
    <h1 className="font-display uppercase text-2xl text-primary lg:text-5xl xl:text-7xl">
        {props.name}
    </h1>
  )
}

export default Header