import React, { useContext } from 'react'
import { A } from './Comp1'
const Comp2 = () => {
    const [data] = useContext(A)

    return (
        <>
            <h1>i am Comp2 <b style={{ color: 'red' }}>{data}</b></h1>
        </>
    )
}

export default Comp2