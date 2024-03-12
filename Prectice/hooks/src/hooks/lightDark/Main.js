import React, { useState, createContext } from 'react'
import First from './First'
import Sec from './Sec'
import Thrid from './Thrid'
export const T = createContext()


const Main = () => {
    // js 
    const theme = useState('light')

  return (
        // html 
        <T.Provider value={theme}>
            <First />
            <Sec />
            <Thrid />
        </T.Provider>
  )
}

export default Main