import React,{memo} from 'react'


const Bcall = ({ demo, changeB }) => {
    
    console.log("i'm from B");

  return (
      <>this is Bcall .js file</>
  )
}

export default memo(Bcall)