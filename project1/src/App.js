// import React, { useReducer } from "react";
// import Hello from './component/Hello'
import "./App.css";
import Cart from "./component/Cart";
// import Onfocus from "./component/Onfocus";
// import Count_usememo from "./component/Count_usememo";
import "./index.css";
// import Reducer from "./component/Reducer";
// import A from './component/A'
// import B from './component/B'
// import C from './component/C'
// import Timers from "./component/Timers";
// import Parant from "./component/Parant";
// export const countercontext = React.createContext()

// import Employees from "./component/Employees";
// import Useeffect from "./component/Useeffect";a
// import Useeffcet2 from "./component/Useeffcet2";
// import Employee from "./component/Employee";
// import Hi from './component/Hi'
// import Abc from './component/Abc'
// import EventHandling from './component/EventHandling'
// import States from "./component/States";
// import State2 from "./component/State2";
// import Task1 from "./component/Task1";
// import Task2 from "./component/Task2";
// import List from "./component/List";
// import Style1 from "./component/Style1";
// import Calculater from "./component/Calculater";

function App() {
  // const initialstate =0
  // const reducer =(state,action)=>{
  //   switch(action){
  //     case 'inc':return state +1
  //     case 'dec':return state-1
  //     case 'res':return initialstate
  //     default:return state
  //   }
  // }

  // const[count,dispatch]=useReducer(reducer,initialstate)
  return (
    <div className="App">
      {/* <Hello name={"hgfhg"} age={22}>
      <button>Click me</button>
    </Hello>

    <Hi name={"jhgdfjhg"} age={11}>
      <p>hello welcome to React js</p>
    </Hi>

      <Abc name={"ygdui"} age={33}>
        <button>Hello</button>
        <button>Hello</button>
      </Abc> */}

      {/* <EventHandling/> */}
      {/* <States /> */}
      {/* <State2></State2> */}
      {/* <Task1></Task1> */}
      {/* <Task2></Task2> */}
      {/* <Style1 Admin ={true}/> */}
      {/* <Calculater /> */}
      {/* <Employee></Employee> */}
      {/* <Useeffect/> */}
      {/* <Useeffcet2></Useeffcet2> */}
      {/* <Employees></Employees> */}
      {/* <Reducer></Reducer> */}

      {/* <h1>{count}</h1>
      <countercontext.Provider value={{count:count,dispatch:dispatch}}>
      <A></A>
      <B></B>
      <C></C>
      </countercontext.Provider> */}

      {/* <Timers></Timers> */}
      {/* <Parant></Parant> */}           
      {/* <Count_usememo></Count_usememo> */}
      {/* <Onfocus></Onfocus> */}
      <Cart></Cart>
    </div>
  );
}

export default App;
