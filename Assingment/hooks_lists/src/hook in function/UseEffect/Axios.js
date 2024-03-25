
import axios from 'axios'
import React, { useState, useEffect, useRef } from 'react'

const Axios = () => {

  const [data, setData] = useState([])
  
  const [index, setIndex] = useState(null)


  const inpt = useRef(null)
  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    axios.get('http://localhost:8001/std').then((result) => {
      console.log(result.data);
      setData(result.data)
    })
  }

  const addData = () => {
    if (index == null) {
      axios.post('http://localhost:8001/std', { name: inpt.current.value }).then(() => {
        getData()
        inpt.current.value = null
      })
    } else {

      axios.patch(`http://localhost:8001/std/${index}`, { name: inpt.current.value }).then((res) => {
        getData()
        inpt.current.value = null
        setIndex(null)
      })

    }

  }

  const deleteData = (i) => {
    axios.delete(`http://localhost:8001/std/${i}`).then(() => {
      getData()
    })
  }

  const updateData = (id, name) => {
    setIndex(id)
    inpt.current.value = name
  }



  return (
    <>
     <center>
                <input type="text" ref={inpt} />
                <button onClick={() => {
                    addData()
                }}>{index == null ? 'Add' : 'Update'}</button>
                <table border={1} rules='all'>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                    {data.map((result, i) => {
                        return (
                            <>
                                <tr>
                                    <td>{i + 1}</td>
                                    <td>{result.name} </td>
                                    <td><button onClick={() => {
                                        deleteData(result.id)
                                    }}>Delete</button>
                                        <button onClick={() => {
                                            updateData(result.id, result.name)
                                        }}>Update</button>
                                    </td>
                                </tr>
                            </>
                        )
                    })}
                </table>
            </center>
    </>
  )
}

export default Axios










// ‘You will suffer a beastly death—die lonely, helpless and aggrieved.’Gandhari’s curse has come true. Near the confluence of the Saraswati, Kapila and Hiranya rivers, Krishna lies under an Aswattha tree, fatally wounded by Jara’s arrow. In his final moments, he reminisces about his time in the mortal world, and the women in his life appear before him. The self-assured, erudite royal consort Rukmini, the most precious of his 16,008 wives, asks him why he is embarking upon moksha alone when she was a fellow traveller on his journeys through dharma, artha and kama. Satyabhama, who came into his life carrying the Syamantak diamond in her trousseau, and dazzled him with her beauty and charm, grapples with the meaning of their marriage. Draupadi, his friend and confidante, is eager to know if Krishna ever desired her romantically. And Radha, one with Krishna in heart and soul, although she is another man’s wife, prepares again to free him of all ties, like she did when he had left Gokul.
// Kaajal Oza Vaidya’s Krishnayan, stitched together with what these four extraordinary women meant to Krishna is at once vivid and intense and also tender, but not for a moment weighed down by sentimentality.Indisputably the biggest bestseller of all time in Gujarati literature—having sold over 200,000 copies and gone into more than twenty - eight editions—it is a finely wrought portrait of a mortal God who is said to be the all - embracing consciousness of the universe itself.