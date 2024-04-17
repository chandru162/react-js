import React, { useEffect, useRef } from 'react'

export default function Onfocus() {
    const inputRef = useRef()

    useEffect(()=>{
        inputRef.current.focus()
    },[])
  return (
    <div>
        <input type="text" ref={inputRef} />
    </div>
  )
}
