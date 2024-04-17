import React from 'react'

function Title() {
  console.log(`welcome to title`)
  return (
    <div>Title</div>
  )
}

export default React.memo(Title)