import React, { createContext } from 'react'
import ChildB from './ChildB'
export const Acomponets=createContext('A')


const ChildA = () => {
  return (
      <div>
          {/* aavi rite wrep krvanu */}
          <Acomponets.Provider value='hii i am data of A and this is useContext all dya are provid childA to childB and childC'>
              <ChildB />
          </Acomponets.Provider>

        <h1>A</h1>
          
    </div>
  )
} 

export default ChildA