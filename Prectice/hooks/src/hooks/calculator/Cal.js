import React from 'react'
import './Cal.css'

const Cal = () => {
    // for js code

    const displayN = (val) => {
        let output = document.getElementById('inputbox')

        if (val == '+' || val == '-' || val == '*' || val == '/') {
            if (output.value.includes('+')) {
                let plus = output.value.split('+')
                let total = Number(plus[0]) + Number(plus[1])
                output.value = total + val
            } else if (output.value.includes('-')) {
                let minus = output.value.split('-')
                let total = Number(minus[0]) - Number(minus[1])
                output.value = total + val
            } else if (output.value.includes('*')) {
                let multi = output.value.split('*')
                let total = Number(multi[0]) * Number(multi[1])
                output.value = total + val
            } else if (output.value.includes('/')) {
                let div = output.value.split('/')
                let total = Number(div[0]) / Number(div[1])
                output.value = total + val

            }
            else {
                output.value += val
            }


        } else {
            output.value += val
        }


    }

    const cal = () => { 
        let output = document.getElementById('inputbox')

        if (output.value.includes('+')) {
            let plus = output.value.split('+')
            console.log(plus);
            let total = parseFloat(plus[0]) + parseFloat(plus[1])
            output.value = total
        } else if (output.value.includes('-')) {
            let minus = output.value.split('-')
            let total = parseInt(minus[0]) - parseInt(minus[1])
            output.value = total
        } else if (output.value.includes('*')) {
            let multi = output.value.split('*')
            let total = parseInt(multi[0]) * parseInt(multi[1])
            output.value = total
        } else if (output.value.includes('/')) {
            let div = output.value.split('/')
            let total = parseInt(div[0]) / parseInt(div[1])
            output.value = total
        }

    }
   
       

            const clearN = () => {
                document.getElementById('inputbox').value = ''

            }


            const del = () => {
                
                let output = document.getElementById('inputbox');
                let currentValue = output.value;
                let characters = currentValue.split('');
                characters.pop();
                output.value = characters.join('');


                
            }

  


    //for  html code 
    return (
        <>
            <div className="container">
                <div className="calculator">
                    <form action="#">

                        <div className="display">
                            <input type="text" name="display" id="inputbox" placeholder="0" />
                        </div>

                        <div>
                            <input type="button" value="Ac" className="operator" onClick={()=>{ clearN() }} />
                            <input type="button" value="DE" className="operator" onClick={() => { del() }} />
                            <input type="button" value="." className="operator" onClick={() => { displayN('.') }} />
                            <input type="button" value="/" className="operator" onClick={() => { displayN('/') }} />
                        </div>

                        <div>
                            <input type="button" value="7" onClick={() => { displayN('7') }} />
                            <input type="button" value="8" onClick={() => { displayN('8') }} />
                            <input type="button" value="9" onClick={() => { displayN('9') }} />
                            <input type="button" value="*" className="operator" onClick={() => { displayN('*') }} />
                        </div>

                        <div>
                            <input type="button" value="4" onClick={() => { displayN('4') }} />
                            <input type="button" value="5" onClick={() => { displayN('5') }} />
                            <input type="button" value="6" onClick={() => { displayN('6') }} />
                            <input type="button" value="-" className="operator" onClick={() => { displayN('-') }} />
                        </div>

                        <div>
                            <input type="button" value="1" onClick={() => { displayN('1') }} />
                            <input type="button" value="2" onClick={() => { displayN('2') }} />
                            <input type="button" value="3" onClick={() => { displayN('3') }} />
                            <input type="button" value="+" className="operator" onClick={() => { displayN('+') }} />
                        </div>

                        <div>
                            <input type="button" value="00" onClick={() => { displayN('00') }} />
                            <input type="button" value="0" onClick={() => { displayN('0') }} />
                            <input type="button" value="=" onClick={() => { cal() }} />
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Cal