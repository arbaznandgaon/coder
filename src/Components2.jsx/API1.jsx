import React from "react";
import axios from "axios";
import { useState } from "react";

function API1() {

// const[myData,setMyData]=useState([])

  function Update() {
    axios
      .get("https://panorbit.in/api/users.json")
      .then((res) => {
        console.log(res.data.users.name); 
        // setMyData(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>

        {/* {myData.map((post)=>{
                const {id,name,username}=post;
                return (<div key={id}>
                    <a>{name}</a>
                    <a>{username}</a>

                </div>)
        })} */}

      <button onClick={Update}>Start</button>
    </div>
  );
}

export default API1;

