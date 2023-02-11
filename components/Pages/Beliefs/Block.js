import React from 'react'
import Header from '../../Elements/Header'
import SubHeader from '../../Elements/SubHeader'
import P from '../../Elements/P'

const Block = (props) => {
  return (
    <div className={`${props.bg} text-center py-10 ${props.textColor} py-3 px-2 sm:py-12 sm:px-6 lg:py-20 lg:px-10 xl:py-36 xl:px-40`}>
        <Header color={props.textColor} name={props.headerName} />
        <P>
            <div>
                {props.text}
            </div>
        </P>
    </div>
  )
}

export default Block