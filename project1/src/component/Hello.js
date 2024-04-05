import React from 'react'


function Hello(props) {
     
  return (

    <>
   <h1>Wlcome {props.name} age is {props.age}</h1>
   {props.children}
   {props.children}

    </>
    

  )

}

export default Hello