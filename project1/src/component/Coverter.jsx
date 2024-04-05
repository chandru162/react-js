import React, { useState } from "react";

export default function Converter() {
  let values = {
    "inr to inr": 1,
    "usd to usd": 1,
    "rub to rub": 1,
    "inr to usd": 0.012,
    "inr to rub": 0.016,
  }

  const [curency1, setcurency1] = useState('inr');
  const [curency2, setcurency2] = useState('inr');
  const [input1, setinput1] = useState(0);
  const [input2, setinput2] = useState(0);

  const changecurency1 = (e) => {
    setcurency1(e.target.value);
  }
  const changecurency2 = (e) => {
    setcurency2(e.target.value);
  }

  const changeinput1 = (e) => {
    setinput1(e.target.value);
    setinput2(e.target.value * values[`${curency1} to ${curency2}`])
  }
  const changeinput2 = (e) => {
    setinput2(e.target.value);
    setinput1(e.target.value / values[`${curency1} to ${curency2}`])
  }

  return (
    <div>
      <h3>Conv</h3>
      <select onChange={changecurency1}>
        <option value='inr'>Inr</option>
        <option value='usd'>Usd</option>
        <option value='rub'>Rub</option>
      </select>
      <input type="number" value={input1} onChange={changeinput1} />

      <br />

      <select onChange={changecurency2}>
        <option value='inr'>Inr</option>
        <option value='usd'>Usd</option>
        <option value='rub'>Rub</option>
      </select>
      <input type="number" value={input2} onChange={changeinput2} />
    </div>
  );
}
