import React, { useState } from 'react'

const UpdatedComponent=(OriginalComponent)=>{

     function NewComponent(props){
       const[count,setcount]=useState(0)


       const handleInc=()=>{
        setcount(count+1)
       }

       return ( <OriginalComponent count={count} handleInc={handleInc} {...props}/>)

    }

    
    return NewComponent

}

export default UpdatedComponent
