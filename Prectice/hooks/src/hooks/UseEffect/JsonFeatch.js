import React, { useEffect, useState } from 'react'

const JsonFeatch = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:8001/std').then
            ((result) => {
                return result.json()

            }).then((res) => {
                console.log(res);
                setData(res)

            })
    })


    return (
        <>

            {data.map((prd) => {


                return (
                    <>
                        <h1>{prd.id}</h1>
                        <h2>{prd.name}</h2></>
                )
            })}


        </>
    )
}

export default JsonFeatch