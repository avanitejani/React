import React, { useContext } from 'react';
import { A } from './Check1';

const Check3 = () => {
  const [data, update] = useContext(A);

  const handleFirstCheckboxChange = () => {
    if (data === 'YES') {
      update('NO');
    } else {
      update('YES');
    }
  };

  const handleSecondCheckboxChange = () => {
    if (data === 'NO') {
      update('YES');
    } else {
      update('NO');
    }
  };

  return (
    <>
      <h1>
        {data === 'YES' ? 'Are you a Citizen? NO' : 'Are you over 21? YES'}
      </h1>

      <label>
        <input
          type="checkbox"
          checked={data === 'YES'}
          onChange={handleFirstCheckboxChange}
        />
        Are you a Citizen
      </label>
<br/>
      <label>
        <input
          type="checkbox"
          checked={data === 'NO'}
          onChange={handleSecondCheckboxChange}
        />
        Are you over 21
      </label>
    </>
  );
};

export default Check3;
