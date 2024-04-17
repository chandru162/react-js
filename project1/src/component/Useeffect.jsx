// Ex=1;

// import React, { useEffect, useState } from 'react'

// export default function Useeffect() {
//   const[count,setcount] = useState(0)
//   const[name,setname]=useState('')
//   useEffect(()=>{
//     console.log("first")
//   })
//   return (
//     <div>
//       <button onClick={()=>{setcount(count + 1)}}>count -{count}</button>
//       <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}}/>
//     </div>
//   )
// }

//=======================================================================================================

// Ex=2

// import React, { useState } from "react";
// import Mousemove from "./Mousemove";

// export default function Useeffect() {
//   const [Toggle, setToggle] = useState(true);

//   const togle=()=>{
//     setToggle(!Toggle)
//   }

//   return (
//     <div>
//       <button onClick={togle}>Toggle</button>
//       {Toggle && <Mousemove />}
//     </div>
//   );
// }

//====================================================================================
// Ex=3

// import React, { useEffect, useState } from "react";

// export default function Useeffect() {
//   const [count, setcount] = useState(0);
//   const [intravelid, setintravelid] = useState();
//   useEffect(() => {
//     const intervel = setInterval(() => {
//       setcount((prev) => prev + 1);
//     }, 500);

//     setintravelid(intervel);

//     return () => {
//       clearInterval(intervel);
//     };
//   }, []);
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button
//         onClick={() => {
//           clearInterval(intravelid);
//         }}
//       >
//         Stop
//       </button>
//     </div>
//   );
// }

// =======================================================
// Ex=4

// import React from 'react'

// export default function Useeffect() {
//   return (
//     <div>

//     </div>
//   )
// }

//===============================================================


// import React, { useEffect, useState } from "react";

// export default function Useeffect() {
//   const [count, setcount] = useState(0);
//   const [intravelid, setintravelid] = useState();
//   const[btn,setbtn]=useState(true)



//   useEffect(() => {
//     const intervel = setInterval(() => {
//       setcount((prev) => prev + 1);
//     }, 1000);

//     setintravelid(intervel);

//     return () => {
//       clearInterval(intervel);
//     };
//   }, []);

//   const Reset =()=>{
//     setcount(0)
//   }


//   const clearinter =() => {clearInterval(intravelid)}
//   const btnchange=()=>{
//     if(btn === true){
//       clearinter()
//       setbtn("start")
    
//     }
//     else{

//       setbtn("Stop")
//     }
    
//   }




//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => {clearInterval(intravelid)}}>{btn}</button>

//       <button onClick={btnchange}>Start</button>

//       <button onClick={Reset}>Reset</button>
      
//     </div>
//   );
// }
