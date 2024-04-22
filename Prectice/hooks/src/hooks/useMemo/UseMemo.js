import React,{useMemo,useState} from 'react'

const UseMemo = () => {

    const [count, setCount] = useState(0)
    const callFunction = useMemo(() => {
        console.log('i am called');
        return 'hello'
    },[])
    

  return (
      <>
          {callFunction}
          <button
              onClick={() => {
              setCount(count+1)
          }}>
              increment
        </button >
        <h1>{ count }</h1>
      </>
  )
}

export default UseMemo