import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState } from "react";

import About from "./Components3/About";
import Test from "./Components3/Test";
import Src2 from "./Components/Src2";
import API1 from "./Components2.jsx/API1";
import Home from "./Form/Home";


function App() {
  const [user, setUser] = useState(null);
  const [user1, setUser1] = useState(null);

  return (
    <div className="App">
  


{/* hjl,f */}
      {/* <Contact /> */}
      {/*  */}
      <Src2/>
      {/* <Home/> */}
      {/* <h1>Hello</h1> */}
    </div>
  );
}

export default App;
