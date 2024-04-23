import React, { createContext, useState } from 'react'
import Check2 from './Check2'
import Check3 from'./Check3'
export const A=createContext()

const Check1 = () => {

    const hook = useState('YES')

  return (
      <>
          <A.Provider value={hook}>
              <Check2 />
              <Check3/>
           </A.Provider>
      </>
  )
}

export default Check1