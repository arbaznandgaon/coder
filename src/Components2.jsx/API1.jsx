import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";

function API1() {

const[myData,setMyData]=useState()

//  useEffect(() => {
//   async function  Update() {
//     await  axios
//         .get("https://panorbit.in/api/users.json")
//         .then((res) => {
//           console.log(res.data.users[0].name); 
//           // setMyData(res.data)
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }
//  }, [])
 async function  Update() {
  await  axios
      .get("https://panorbit.in/api/users.json")
      .then((res) => {
        console.log(res.data.users[0].name); 
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
<a>{}</a>
      <button onClick={Update}>Start</button>
    </div>
  );
}

export default API1;

