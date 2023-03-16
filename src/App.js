import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState } from "react";
// import Src5 from "./Components/Src5";
import API1 from "./Components2.jsx/API1";
import API2 from "./Components2.jsx/API2";
import API3 from "./Components2.jsx/API3";
import Profile from "./Components2.jsx/Profile";
// import Src1 from "./Components/Src1";
// import Src2 from "./Components/Src2";
// import Src3 from "./Components/Src3";
// import Src4 from "./Components/Src4";

function App() {

  const [user, setUser]= useState(null)
  const [user1, setUser1]= useState(null)


  return (
    <div className="App">
      {/* <Src1/> */}
      {/* <Src2/> */}
      {/* <Src3/> */}
      {/* <Src4/> */}
      {/* <Src5/> */}
      {/* <API1/> */}
      {/* {user? <API3 /> : <API2 get={setUser}/>} */}
      {/* {user1?  <API2 /> :<API3 gets={setUser1}/>} */}
<Profile/>
      {/* <API2/> */}
    </div>
  );
}

export default App;