import React, { Component } from 'react'


export default class Todoclass extends Component {
    constructor() {
        super()
        this.state = {
            std: [],

            // updat 
            index: null
        }
    }

    addData() {
        let data = document.getElementById('data').value
        this.setState({ std: [...this.state.std, data] })
        document.getElementById('data').value = ''


    }


    deleteData(d) {
        let newStd = [...this.state.std]
        newStd.splice(d,1)
        this.setState({ std: newStd })

    }
    render() {



        return (
            <>
                <br />
                <br />
                <br />
                <h1>todo in class componet</h1>

                <input type="text" id='data' />


                <button onClick={() => {
                    this.addData()
                }}>add</button>

                {this.state.std.map((result) => {

                    return (
                        <>
                            <h1>{result}</h1>
                            <button onClick={(d) =>
                            {
                                this.deleteData(d)
                            }}>del</button>


                        </>

                    )

                })}



            </>
        )
    }
}

