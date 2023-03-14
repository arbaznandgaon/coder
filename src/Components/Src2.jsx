import React from "react";
import { useState } from "react";

function Src2() {
  const [first1, setFirst1] = useState("");
  const [last1, setLast1] = useState("");

  var AddChanges = () => {
    let arr2 = JSON.parse(localStorage.getItem("Obj2") || "[]");

    var Obj1 = {
      first1,
      last1,
    };

    arr2.push(Obj1)

    localStorage.setItem("Obj2", JSON.stringify(arr2));
  };

  return (
    <div className="space-y-2">
     <a>First Name:</a>
     <input
            placeholder="Enter your first name"
            type="text"
            value={first1}
            onChange={(e) => {
              setFirst1(e.target.value);
            }}
            className="text-xl pl-2 rounded-lg border-2 border-black"
          />
      <br />
      <a>Last Name:</a>
      <input
        placeholder="Enter your last name"
        value={last1}
        type="text"
        onChange={(e) => {
          setLast1(e.target.value);
        }}
        className="text-xl pl-2 rounded-lg border-2 border-black"
      />
      <br />
      <button onClick={AddChanges}>Save</button>
      <button className="px-6 font-semibold text-gray-800 rounded-sm py-1 bg-gray-300">
            Cancel
          </button>
    </div>
  );
}

export default Src2;
