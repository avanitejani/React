import React, { useState, useRef } from 'react'



const Todo = () => {


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


    return (
        <>
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

    )
}

export default Todo