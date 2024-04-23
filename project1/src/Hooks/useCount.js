import { useState } from "react"

function useCount(a=100,inival=100) {
    const[count,setcount]=useState(inival)

    const handleInc=()=>{
        setcount(count+a)
    }  

    const handleDec=()=>{
        setcount(count-a)
    }
    
    return[count,handleInc,handleDec]
}

export default useCount