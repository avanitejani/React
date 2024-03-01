import React, { useState, useRef } from 'react'


function Todo() {
    const [todo, setTodo] = useState([])
    const input = useRef(null)
    const AddData = () => {
        setTodo([...todo, input.current.value])
        input.current.value = ''

    }

    const deleteData = (index) => {
        let newdata = todo.filter((result, id) => {
            return id != index
        })

        setTodo(newdata)
    }

    return <>
        <center>
            <input type='text' ref={input} />
            <button onClick={() => {
                AddData()
            }}>
                Add
            </button>
            {todo.map((result, i) => {
                return (
                    <>
                        <h1>{result}</h1>
                        <button onClick={() => {
                            deleteData(i)
                        }}>Delete</button>
                    </>
                )
            })}
        </center>
    </>
}

export default Todo











// hook aetle extra code  jeno react ma as a hook trike use thase
// live value change krva mate useState NO Use thay


// parant thi chaild ma dsata pass krva mate props no use thay


// parance thi chaild ma dta pass krta promps ma variyabl no use tgai 6e
// chail thi perance ma data pass  krva promps ma function no usse thay 6e

// useref no use html input mathi value lavine javascreep ma stor krva mate use thay