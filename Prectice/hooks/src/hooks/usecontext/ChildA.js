import React, { createContext } from 'react'
import ChildB from './ChildB'
export const Acomponets=createContext('A')


const ChildA = () => {
  return (
      <div>
          <Acomponets.Provider value='hii i am data of A'>
              <ChildB />
          </Acomponets.Provider>

        <h1>A</h1>
          
    </div>
  )
} 

export default ChildA