import React from "react";
import { useState } from "react";

function Src2() {
     const [student,setStudent]=useState('')
    const [div,setDiv]=useState('')


    const update= ()=>{
        var arr=JSON.parse(localStorage.getItem('OBJECT') || '[]')

       var obj={
            student,
            div
        }

        arr.push(obj)

        localStorage.setItem('OBJECT',JSON.stringify(arr))
    }

  return (
    <div>
     <form>
     First Name: <input
            placeholder="Enter your first name"
            type="text"
            value={student}
            onChange={(e) => {
              setStudent(e.target.value);
            }}
            className="text-xl pl-2 rounded-lg border-2 border-black"
          />
      <br />
      Last Name:   <input
            placeholder="Enter your last name"
            value={div}
            type="text"
            onChange={(e) => {
              setDiv(e.target.value);
            }}
            className="text-xl pl-2 rounded-lg border-2 border-black"
          /><br/>
      <button onClick={update}>Save</button>
     </form>
    </div>
  );
}

export default Src2;
