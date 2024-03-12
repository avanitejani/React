import React, { useContext } from 'react'
import { T } from './Main'

const Thrid = () => {
    const [mode] = useContext(T)

  return (
      <>
          <h4 style={{ backgroundColor: mode == 'dark' ? 'black' : 'white', color: mode == 'dark' ? 'white' : 'black' }}>this is h4 tage in Thrid.js file in thrid componet</h4>
      </>
  )
}

export default Thrid