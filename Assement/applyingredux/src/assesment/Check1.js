import React, { createContext, useState } from 'react'
import Check2 from './Check2'
import Check3 from './Check3'
export const A = createContext()

const Check1 = () => {

    const citizen = useState('NO')
    const age = useState('NO')

    return (
        <>
            <A.Provider value={[citizen, age]}>
                <Check2 />
                <Check3 />
            </A.Provider>
        </>
    )
}

export default Check1