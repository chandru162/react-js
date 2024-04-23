
import { useReducer } from "react";

export default function Prodect() {
  const initialState = {prodectA:0,prodectB:0};
  
   const Reducer = (state,action)=>{
    switch(action){
      case 'incA' :return {...state,ProdectA:state.prodectA+1}

      case 'incB' :return {...state,ProdectB:state.prodectB-1}

      case 'decA' :return {...state,ProdectA:state.prodectA+1}

      case 'decB' :return {...state,ProdectB:state.prodectB-1}

      default :return state;
    }
   }


   const[count,dispatch]=useReducer(Reducer,initialState)

  

  return (
    <div>
      {count.prodectA}
      {count.prodectB}
      <button onClick={()=>{dispatch('incA')}}>Add prodect A</button>
      <button onClick={()=>{dispatch('incB')}}>Add prodect B</button>
    </div>
  );
}
