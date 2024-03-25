import React,{useContext} from 'react'
import { Acomponets } from './ChildA'

const ChildC = () => {
    const data=useContext(Acomponets)
  return (
      <div>
          hii i am c
          <h1 style={{
              color: 'green', background: 'yellow'
          }}>{data}</h1>
    </div>
  )
}

export default ChildC