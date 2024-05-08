import React, { useContext } from 'react';
import { A } from './Check1';

const Check3 = () => {
  const [citizen, age] = useContext(A);
  const [myage, setAge] = age
  const [citizens, setCitizen] = citizen

  const handleFirstCheckboxChange = () => {
    if (citizens === 'YES') {
      setCitizen('NO');
    } else {
      setCitizen('YES');
    }
  };

  const handleSecondCheckboxChange = () => {
    if (myage === 'NO') {
      setAge('YES');
    } else {
      setAge('NO');
    }
  };

  return (
    <>
      <h1>
        Are you a Citizen?:
        {citizen}
      </h1>
      <h1>
        Are you over 21?
        {mya}
      </h1>

      <label>
        <input
          type="checkbox"
          checked={citizens === 'YES'}
          onChange={handleFirstCheckboxChange}
        />
        Are you a Citizen
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={myage === 'YES'}
          onChange={handleSecondCheckboxChange}
        />
        Are you over 21
      </label>
    </>
  );
};

export default Check3;
