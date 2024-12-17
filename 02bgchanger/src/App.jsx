import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-11 inset-x-0 px-2">
        <div className="fixed flex flex-wrap justify-center gap-3 bg-white shadow-lg px-3 py-2 rounded-3xl">
          <button
            className="outline-none px-4 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "violet" }} onClick={()=>setColor("violet")}>
            violet
          </button>
          <button
            className="outline-none px-4 rounded-full text-black shadow-lg "
            style={{ backgroundColor: "indigo" } } onClick={()=>setColor("indigo")}
          >
            indigo
          </button>
          <button
            className="outline-none px-4 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "blue" }}
            onClick={()=>setColor("blue")}
          >
            blue
          </button>
          <button
            className="outline-none px-4 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "green" }} onClick={()=>setColor("green")}
          >
            green
          </button>
          <button
            className="outline-none px-4 rounded-full text-black shadow-lg "
            style={{ backgroundColor: "yellow" }} onClick={()=>setColor("yellow")}
          >
            yellow
          </button>
          <button
            className="outline-none px-4 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "orange" }} onClick={()=>setColor("orange")}
          >
            orange
          </button>
          <button
            className="outline-none px-4 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "red" }} onClick={()=>setColor("red")}
          >
            red
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
