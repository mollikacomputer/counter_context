
import './App.css';
import React, { createContext, useState } from "react";
import Parent from './pages/Parent';
export const COUNTER_CONTEXT = createContext();
function App() {
const [count, setCount] = useState(0);
const value={count, setCount};

  return (
      <COUNTER_CONTEXT.Provider value={value} >
        <Parent/>
      </COUNTER_CONTEXT.Provider>
 
  );
}
export default App;


// import './App.css';
// import React, { createContext, useState } from "react";
// import Parent from './pages/Parent';
// export const COUNTER_CONTEXT = createContext();
// function App() {
// const [count, setCount]= useState(0);
// const value = {count, setCount};
//   return (
//     <COUNTER_CONTEXT.Provider value={value} >
//       <Parent/>
//     </COUNTER_CONTEXT.Provider>

//   );
// }
// export default App;

// import './App.css';
// import React, {createContext, useState} from "react"
// import Parent from './pages/Parent';

// export const COUNTER_CONTEXT = createContext();
// function App() {
// const [count, setCount] = useState(0);
// const value ={count, setCount};
//   return (
//     <COUNTER_CONTEXT.Provider value={value}>
//       <Parent/>
//     </COUNTER_CONTEXT.Provider>

//   );
// }
// export default App;


// import './App.css';
// import React, {createContext, useState} from "react"
// import Parent from './pages/Parent';
// export const COUNTER_CONTEXT = createContext();
// function App() {
//  const [count, setCount] = useState(0);
//  const value = {count, setCount};
//   return (
//     <COUNTER_CONTEXT.Provider value={value}>
//       <Parent/>
//     </COUNTER_CONTEXT.Provider>
//   );
// }
// export default App;
