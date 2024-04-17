import React from 'react'

function Button(props) {
  console.log(`button for ${props.name}`)
  return (
    <div>
      <button onClick={props.handleClick}>Click</button>
    </div>
  )
}

export default React.memo(Button)