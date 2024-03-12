import React, { useContext } from 'react'
import { Acomponent } from './ChildA'
const ChildC = () => {
  const [data, update] = useContext(Acomponent)
  const [ydata, yupdate] = useContext(Acomponent)
  const [ndata, nupdate] = useContext(Acomponent)

  const updateContext = () => {
    update('hii i am ok change to child C in "A" ')
  }
  const yescontext = () => {
    update("hii i am ok change to child A in 'yes'")
  }
  const nocontext = () => {
    update("hii i am ok change to child A in 'no'")
  }

  return (
    <div>hII I AM C

      <h1 style={{ color: 'green' }}>{data}</h1>
      <button onClick={() => {
        updateContext()
      }}>Update</button>

      {/* <h1 style={{ color: 'green' }}>{ydata}</h1> */}
      <button onClick={() => { yescontext() }}>yes</button>

      {/* <h1 style={{ color: 'green' }}>{ydata}</h1> */}
      <button onClick={() => { nocontext() }}>no</button>
    </div>
  )
}

export default ChildC

// child A ni const hook = useState('A') ni value update thade child C  ma