import React, { useEffect, useState } from "react";

export default function Useeffcet2() {
  l
  const [count, setcount] = useState();
  const [isRunning, setisRunning] = useState(true);
  const[reset,setreset]=useState()


    useEffect(()=>{
      let interval;
      if(isRunning && count){
          interval = setInterval(()=>{
              setcount(prev => prev - 1 )
          },1000)
      }

      else if(count === 0){
        setisRunning(false);                                                                                                                                                                                                                                      
      }

      return ()=>{
          clearInterval(interval)
      }
    },[isRunning,count])

    const clickk = (e)=>{
      {setcount(e.target.value)} 
      {setreset(e.target.value)}
    }




  return (
    <div>
      <h1>Coundown Timer : {count} seconds</h1>

      <input type="number" onChange={(e)=>{{setcount(e.target.value)} {setreset(e.target.value)}}} />


      {isRunning ? <button onClick={()=>{setisRunning(false)}}>Stop</button>:<button onClick={()=>{setisRunning(true)}}>Start</button>}

      <button onClick={(e)=>{e.target.value}} value={reset}>Reset</button>

    </div>
  );
}
