// import React, { useEffect, useState } from "react";

// export default function Mousemove() {
//   const [x, setx] = useState(0);
//   const [y, sety] = useState(0);

//   useEffect(() => {
//     window.addEventListener("mousemove", logPosition);
//     return () => {
//       window.removeEventListener("mousemove", logPosition);
//     };
//   });

//   const logPosition = (e) => {
//     console.log("mouse is mounting !!!");
//     setx(e.clientX);
//     sety(e.clientY);
//   };

//   return (
//     <div>
//       mouse Mousemove x-{x},y-{y}
//     </div>
//   );
// }
