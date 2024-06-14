import React, { useState } from "react";

const BgChanger = () => {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-full h-screen bg-black"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap bottom-12 inset-x-0 px-2">
        <div className="bg-white flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full  shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full  shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full  shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            blue
          </button>
          <button
            onClick={() => setColor("olive")}
            className="outline-none px-4 py-1 rounded-full  shadow-lg"
            style={{ backgroundColor: "olive" }}
          >
            olive
          </button>
          <button
            onClick={() => setColor("gray")}
            className="outline-none px-4 py-1 rounded-full  shadow-lg"
            style={{ backgroundColor: "gray" }}
          >
            gray
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full  shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            yellow
          </button>
          <button
            onClick={() => setColor("pink")}
            className="outline-none px-4 py-1 rounded-full  shadow-lg"
            style={{ backgroundColor: "pink" }}
          >
            pink
          </button>
          <button
            onClick={() => setColor("purple")}
            className="outline-none px-4 py-1 rounded-full  shadow-lg"
            style={{ backgroundColor: "purple" }}
          >
            purple
          </button>
          <button
            onClick={() => setColor("lavender")}
            className="outline-none px-4 py-1 rounded-full  shadow-lg"
            style={{ backgroundColor: "lavender" }}
          >
            lavender
          </button>
          <button
            onClick={() => setColor("white")}
            className="outline-none px-4 py-1 rounded-full  shadow-lg"
            style={{ backgroundColor: "white" }}
          >
            white
          </button>
          <button
            onClick={() => setColor("black")}
            className="outline-none px-4 py-1 rounded-full  shadow-lg"
            style={{ backgroundColor: "black" }}
          >
            black
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default BgChanger;

// import React from "react";
// import { useState } from "react";

// const App = () => {
//   const [counter, setCounter] = useState(0);

//   const increment = () => {
//     if (counter < 20) {
//       setCounter(counter + 1);
//     }
//   };
//   const decrement = () => {
//     if (counter > 0) {
//       setCounter(counter - 1);
//     }
//   };
//   return (
//     <div>
//       <button onClick={increment}>increse {counter}</button>
//       <button onClick={decrement}>decrease {counter}</button>
//     </div>
//   );
// };

// export default App;
