
import { useReducer } from "react";

export default function ProdectA() {
  const initialState = 0;
  
   const Reducer = (state,action)=>{
    switch(action){
      case 
      default :return state
    }
   }

   const[count,dispatch]=useReducer(Reducer,initialState)

  

  return (
    <div>
      <button onClick={()=>{dispatch('AddA')}}>Add prodect A</button>
      <button onClick={()=>{dispatch('AddB')}}>Add prodect B</button>
    </div>
  );
}
