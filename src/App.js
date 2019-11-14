import React from "react";
// import Mostfa, {
//   FunctionalComp2,
//   FunctionalComp3
// } from "./components/FunctionalComponent";
import FunctionalComp from "./components/FunctionalComponent";
import ClassComponent from "./components/ClassComponent";
import Counter from "./components/Counter";
import "./App.css";

let mostfa = "safouane";
let tab = [0, 20, 66, 118];

function App() {
  return (
    <div className="App">
      <h1>this is app.js</h1>
      <FunctionalComp keyy={mostfa} />
      {/* <Mostfa />
      <FunctionalComp2 />
      <FunctionalComp3 /> */}
      <ClassComponent keyy={mostfa} />
      {/* <Counter startingValue={0} /> */}
      {tab.map((el, i) => (
        <Counter startingValue={el} key={i} />
      ))}
    </div>
  );
}

export default App;
