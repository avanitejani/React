import React, { useCallback, useState } from 'react'
import Bcall from './Bcall'

const Acall = () => {
  // js

  const [count, setCount] = useState(0)
  const [demo, setDemo] = useState([])

  // callback hook use 
  const changeB = useCallback(() => {
    console.log("i'm from A");
  }, [])

  return (
    <>this is Acall .js file
      <button onClick={() => setCount(count + 1)}>increement</button>
      <h1>{count}</h1>

      {/* <Bcall demolist={demo} fun={changeB} /> */}


      {/* {count.map(() => {

        return (
          <>
            <h1>{count}</h1>
          </>
        )
        
      })} */}



    </>
  )
}

export default Acall


// arre typ na data ne loop chalavi html ma print krava map no use thay 