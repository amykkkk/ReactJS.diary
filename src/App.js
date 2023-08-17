import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";

// COMPONENTS
import MyButton from "./components/MyButton";
import MyHeader from "./components/MyHeader";

function App() {
  /*
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";
  */

  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader
          headText={"App"}
          leftChild={
            <MyButton
              text={"Left Button"}
              onClick={() => alert("Left Click")}
            />
          }
          rightChild={
            <MyButton
              text={"Right Button"}
              onClick={() => alert("Right Click")}
            />
          }
        />
        <h2>App.js</h2>
        {/* <img src={process.env.PUBLIC_URL + `/assets/emotion1.png`} /> */}

        <MyButton
          text={"Button"}
          onClick={() => alert("Button Click")}
          type={"positive"}
        />
        <MyButton
          text={"Button"}
          onClick={() => alert("Button Click")}
          type={"negative"}
        />
        <MyButton text={"Button"} onClick={() => alert("Button Click")} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/diary/:id" element={<Diary />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
