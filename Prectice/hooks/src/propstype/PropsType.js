import React from 'react'
import PropsTypes from 'prop-types'

const PropsType = ({list,site}) => {
    return (
      
        <>
            <h1>{ list.name }</h1>
            <h1>{list.age}</h1>

            


            <h1>{site}</h1>


            
        </>

      

  )
}

export default PropsType



PropsType.PropsTypes = {
    list: PropsTypes.shape({
        name: PropsTypes.string.isReqied,
        age: PropsTypes.number.isReqied
    }),
    site:PropsTypes.string.isRequired
}