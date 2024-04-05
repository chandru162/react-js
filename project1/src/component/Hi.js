import React from 'react'

function Hi(props) {

    const {name,age} = props

  return (

    <>
    <h1>Wlcome {name} age is {age}</h1>
    {props.children}

    </>

  )
}

export default Hi