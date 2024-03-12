import React, { createContext, useState } from 'react'
import ChildB from './ChildB'
export const Acomponent = createContext()
const ChildA = () => {
  const hook = useState('A')
  // const yes = useState('B')
  return (
    <div>
      <Acomponent.Provider value={hook}>
        <ChildB />
      </Acomponent.Provider>
      {/* <Acomponent.Provider value={yes}>
        <ChildB />
      </Acomponent.Provider> */}
      <h1>hii i am A TO C</h1>

    </div>
  )
}

export default ChildA