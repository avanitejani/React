
// import React, { useState } from 'react'

// const Test = () => {
//     const [count, setCount] = useState(0)
//     const increement = () => {
//         setCount(count + 1)
//     }

//     return (
//         <>
//             <center><h1>{count}</h1></center>
//             <button onClick={() => { increement() }}>Add</button>
//         </>
//     )
// }

// export default Test

import React , {useState} from 'react'

const Test = (props) => {
  return (
      <>
          <h1>{props.webnme }</h1>
      </>
  )
}

export default Test