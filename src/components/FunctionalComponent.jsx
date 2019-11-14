import React from "react";

// FUNCTIONAL COMPONENT
export default function FunctionalComp(props) {
  console.log(props);

  return <h1>this is a functional comp: {props.keyy}</h1>;
}

// export function FunctionalComp2() {
//   return <h1>this is a functional comp2222</h1>;
// }
// export function FunctionalComp3() {
//   return <h1>this is a functional comp3333</h1>;
// }

// arrow function
// let FunctionalComp = () => {
//   return <h1>this is a functional comp</h1>;
// };
