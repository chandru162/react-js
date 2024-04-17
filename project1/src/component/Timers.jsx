import React, { useEffect, useState } from "react";
import "./Timer.css";

export default function Timers() {
  const [duration, setduration] = useState();
  const [isRunning, setisRunning] = useState(false);
  const [seconds, setseconds] = useState();
  const [isRunningCompleted, setisRunningCompleted] = useState(false);

  useEffect(() => {
    let intraval;
    if (isRunning && seconds > 0) {
        intraval = setInterval(() => {
        setseconds((prev) => prev - 1);
      }, 1000);

    } else if (seconds === 0 && isRunning) {
      setisRunning(false);
      setisRunningCompleted(true);
    }

    return () => clearInterval(intraval);
  }, [isRunning, seconds]);

  const handletime = (e) => {
    setduration(e.target.value);
    setseconds(e.target.value);
  };

  const prograswith = (seconds / duration) * 100;

  return (
    <div>
      {isRunningCompleted ? <h1>HAPPY BIRTHDAY !!!</h1> : <h1></h1>}

      <div className="container">
        <div className="prograsbar" style={{ width: prograswith + "%" }}></div>
      </div>

      <input type="number" value={duration} onChange={handletime} disabled={isRunning}
      />

      {isRunning ? (<button  onClick={() => {setisRunning(false)}}>Stop</button>) : 
      (<button onClick={() => {setisRunning(true)}}>Start</button>)}

      <button onClick={() => {setseconds(duration);setisRunningCompleted(false)}}>Reset</button>
      
    </div>
  );
}
