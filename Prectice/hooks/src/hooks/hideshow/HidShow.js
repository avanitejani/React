import React,{useState} from 'react'

const HidShow = () => {

    const [paswd, setpaswd] = useState(false)

    const toggle = () => {
        setpaswd(!paswd)
    }

    return (
      <>
            
            <h1> HidShow password </h1>

            <input type={!paswd ? "password" : "text"} />
            <button onClick={toggle}>

                {paswd ? (
                    <i className="fa-solid fa-eye-slash"></i>
                ) : (
                    <i className="fa-solid fa-eye"></i>
                )}

            </button>
            


           
           

      </>
    )
    

}
