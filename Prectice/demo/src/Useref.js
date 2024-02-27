import React, {useState,useRef} from 'react'

const Useref = () => {

    const input = useRef(null)

    const [text, setText] = useState(null)

    const getData = () => {
        console.log(input.current.value);
        setText(input.current.value)
        input.current.value = ''
        input.current.focus() // focus KRVA BUTTON PR clik krvi tyARE input box ni line dark thase
        
        
    }

  return (
      <>
          <center><input type="text" ref={ input } />
              <button onClick={() => {
                  getData()
              }}> Click me </button>
              
              <h1>{text}</h1>
          </center>
          
      </>
  )
}

export default Useref