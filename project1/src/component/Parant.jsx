import React, { useCallback, useState } from 'react'
import Title from './Title'
import Display from './Display'
import Button from './Button'

function Parant() {
    const[age,setage]=useState(22)
    const[salary,setsalary]=useState(200000)

    const handleage = useCallback(()=>{
        setage(age+1)
    },[age])

    const handlesalary= useCallback(()=>{ 

      setsalary(salary+1000)
    },[salary])

  return (
    <div>
     <Title></Title>
     <Display name="age" display={age}></Display>
     <Button name="age" handleClick={handleage}>click</Button>
     <Display name="salary" display={salary}></Display>
     <Button name="salary" handleClick={handlesalary}>click</Button>
    </div>
  )
}

export default Parant