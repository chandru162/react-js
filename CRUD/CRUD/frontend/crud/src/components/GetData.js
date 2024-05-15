import React, { useEffect } from 'react'
import axios from 'axios'
export default function GetData() {
useEffect(()=>{
axios.get('http://localhost:3001/staffs/get')
.then(res=>console.log(res))
.catch(err=>console.log(err))
},[])
  return (
    <div>
      get data
    </div>
  )
}
