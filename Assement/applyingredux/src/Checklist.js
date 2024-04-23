import React, { useState, useContext } from 'react'
const AgeContext = React.createContext();


const Comp3 = () => {


    const [isOver21, setIsOver21] = useState(false);

    function handleCheckboxChange(event) {
        setIsOver21(event.target.checked);
    }

    const [isAbov21, setIsAbov21] = useState(false);

    function handleCheckboxChange(event) {
        setIsAbov21(event.target.checked);
    }

    function AgeMessage() {
        const { isOver21 } = useContext(AgeContext);

        return (
            <p>{isOver21 ? "You are Citizen." : "Are you over 21?."}</p>
        );
    }



    return (

        <>
           


            <input
                type="checkbox"
                checked={isOver21}
                onChange={handleCheckboxChange}
            />

            <label>Are you Citizen?</label>
            <AgeContext.Provider value={{ isOver21 }}>
                <AgeMessage />
            </AgeContext.Provider>


            <input
                type="checkbox"
                checked={isAbov21}
                onChange={handleCheckboxChange}
            />

            <label>Are you over 21?</label>
            <AgeContext.Provider value={{ isAbov21 }}>
                <AgeMessage />
            </AgeContext.Provider>

        </>
    )
}

export default Comp3