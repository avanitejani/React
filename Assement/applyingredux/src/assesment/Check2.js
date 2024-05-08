import React, { useContext } from 'react'
import { A } from './Check1'

const Check2 = () => {
  const [citizen] = useContext(A)
  return (
    <>
      <h1>Are you a Citizen <b style={{ color: 'red' }}>{citizen}</b></h1>
    </>
  )
}

export default Check2