import React, { useState } from 'react'

export default function Task2() {
  const [Name,setName] = useState("ON");
    const OnOff =()=>{
        setName(Name === "ON"?"OFF":"ON")
    }
  return (
    <div>
      <p>{Name}</p>
        <button onClick={OnOff}>Click</button>
    </div>
  )
}
