import React, { useState } from 'react';

export default function CustomField(props) {
    const [fValue, setFValue] = useState("");
  return (
    <div>
        <input value={fValue} onChange={setFValue} placeholder="Enter something here..." />
        <p>{fValue}</p>
    </div>
  );
}
