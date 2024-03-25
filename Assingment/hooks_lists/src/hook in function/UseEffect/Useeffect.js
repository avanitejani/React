import React, { useEffect } from 'react'

const Useeffect = () => {
    useEffect(() => {
        console.log("hii this is a useeffect");
        document.getElementById('col').style.color = 'red'
            ;    },[])
    
  return (
      <>
          <h1 id='col'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, sed ducimus dolorem consectetur similique ipsum vero sit sapiente enim mollitia asperiores, magni iusto nostrum sunt rerum nemo quisquam modi illum!</h1>
      </>
  )
}

export default Useeffect