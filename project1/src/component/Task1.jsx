import React, { useState } from 'react'



export default function Task1() {
    const[Count,setCount]=useState(0);

    const Inc =()=>{
        if(Count<10){
            setCount(Count+1)
        }
    }

    const Dec =()=>{
        if(Count>0){
            setCount(Count-1)
        }
    }

 
  return (
    <div>
        <h1>Count - {Count}</h1>

        <button onClick={Inc}>Inc</button>
        <button onClick={Dec}>Dec</button>

    </div>
  )
}
