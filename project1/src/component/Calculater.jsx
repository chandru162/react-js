// import React, { useState } from 'react'
// import './calcu.css'

// export default function Calculater() {

//     const [input,setinput]=useState('')

     


//   return (
//     <div className='calbody'>
//         <h1>Calculater</h1>
//       <input type="text" value={input}/>
//       <br />
//       <br />
//       <button onClick={()=>{setinput(input+'7')}}>7</button>
//       <button onClick={()=>{setinput(input+'8')}}>8</button>
//       <button onClick={()=>{setinput(input+'9')}}>9</button>
//       <button onClick={() => { setinput('') }}>c</button>
      
//       <br />
//       <button onClick={()=>{setinput(input+'4')}}>4</button>
//       <button onClick={()=>{setinput(input+'5')}}>5</button>
//       <button onClick={()=>{setinput(input+'6')}}>6</button>
//       <button onClick={()=>{setinput(input+'*')}}>*</button>
      
//       <br />
//       <button onClick={()=>{setinput(input+'1')}}>1</button>
//       <button onClick={()=>{setinput(input+'2')}}>2</button>
//       <button onClick={()=>{setinput(input+'3')}}>3</button>
//       <button onClick={()=>{setinput(input+'-')}}>-</button>

//       <br />
//       <button onClick={()=>{setinput(input+'.')}}>.</button>
//       <button onClick={()=>{setinput(input+'0')}}>0</button>
//       <button onClick={()=>{setinput(eval(input)+'')}}>=</button>
//       <button onClick={() => { setinput(input + '/') }}>/</button>
//       <button onClick={() => { setinput(input + '+') }}>+</button>
//       <button onClick={() => { setinput(input.slice(0,input.length-1))}}>BS</button>
      
//     </div>
//   )
// }