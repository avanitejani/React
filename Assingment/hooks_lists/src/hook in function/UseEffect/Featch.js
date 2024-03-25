import React, { useEffect, useState } from 'react'



const Featch = () => {

    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products').then((result) => {
            return result.json() // jeson na data ne object ma convert karin return krayvo
        }).then((res) => {
            console.log(res);
            setProduct(res)
        })
    }, [])


    return (
        <>
            <div className='container d-flex flex-wrap'>

            {product.map((prd) => {
                return (
                    <>
                        {/* <img src={prd.image}  alt="" />
                        <h3>{prd.title}</h3> */}


                        <div class="card" style={{ width: "18rem" }} >
                            <img src={prd.image} class="card-img-top"  alt="..."/>
                                <div class="card-body">
                                <h5 class="card-title">{prd.title}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                        </div>



                    </>
                )
            })}
            </div>
        </>

    )
}

export default Featch