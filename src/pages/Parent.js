import React, { useContext } from "react";
import { COUNTER_CONTEXT } from "../App";
const Parent = () => {
const {count, setCount} = useContext(COUNTER_CONTEXT);
  return (
    <div className="container mx-auto ">
      <div className="grid justify-center">
        <h2 className="text-2xl my-16">counter {count} </h2>
        <div className="flex justify-center gap-2">
          <button
            className="btn btn-primary"
            onClick={()=> setCount(prvState=> prvState +1 )}
          >
            increment +
          </button>
          <button
            className="btn btn-secondary"
            onClick={()=> setCount( prvState=> prvState -1 )}
          >
            Decrement -
          </button>
        </div>
        <h2> This is home page</h2>
      </div>
    </div>
  );
};
export default Parent;

// import React, { useContext } from "react";
// import {COUNTER_CONTEXT} from "../App";
// const Parent = () => {
//   const {count, setCount} = useContext(COUNTER_CONTEXT);
//   return (
//     <div className="container mx-auto ">
//       <div className="grid justify-center">
//         <h2 className="text-2xl my-16">counter {count} </h2>
//         <div className="flex justify-center gap-2">
//           <button className="btn btn-primary"
//           onClick={()=> setCount(prvState=> prvState+1)}
//           >
//             increment +</button>
//           <button className="btn btn-secondary"
//           onClick={()=>setCount(prvState=> prvState-1)}
//           >
//             Decrement -
//           </button>
//         </div> <h2> This is home page</h2> </div>
//     </div>
//   );
// };
// export default Parent;

// import React, { useContext } from "react";
// import {COUNTER_CONTEXT} from "../App"
// const Parent = () => {
// const {count, setCount} = useContext(COUNTER_CONTEXT);
//   return (
//     <div className="container mx-auto ">
//       <div className="grid justify-center">
//         <h2 className="text-2xl my-16">counter {count} </h2>
//         <div className="flex justify-center gap-2">
//           <button className="btn btn-primary"
//             onClick={()=> setCount(prvState => prvState+1)}>
//             increment +</button>
//           <button className="btn btn-secondary"
//             onClick={()=> setCount(prvState => prvState-1)}>
//             Decrement -
//           </button>
//         </div> <h2> This is home page</h2> </div>
//     </div>
//   );
// };
// export default Parent;
