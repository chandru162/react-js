import React from 'react'

export default function Prodects(props) {

    if(props.name === "samsung"){
        throw new Error("!!!!!!!!")
    }
     
  return (
    <div>
       <h1>{props.name}</h1>
    </div>
  )
}
