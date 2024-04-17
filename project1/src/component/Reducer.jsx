import React, { useReducer } from 'react'

export default function Reducer() {
  
    const initialstate = 0
    const reducer = (state,action)=>{

        switch(action){

            case 'increment':return state+1
    
            case 'decrement':return state-1

            case 'reset':return initialstate

            default :return state
        }
    }

    const[count,dispatch]=useReducer(reducer,initialstate)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>{dispatch('increment')}}>Inc</button>
        <button onClick={()=>{dispatch('decrement')}}>Dec</button>
        <button onClick={()=>{dispatch('reset')}}>Res</button>

    </div>
  )
}
