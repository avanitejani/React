import React, { useContext } from 'react'
import { T } from './Main'

const Sec = () => {
    const [mode] = useContext(T)
  return (
      <>
          <p style={{ backgroundColor: mode == 'dark' ? 'black' : 'white', color: mode == 'dark' ? 'white' : 'black' }}>hii this is p tag for Sec.js file in Sec comopnet</p>
      </>
  )
}

export default Sec