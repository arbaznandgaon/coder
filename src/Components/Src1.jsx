import React from "react";
import { useState } from "react";

function Src1() {
  const [first, setFirst] = useState("");
  const [mail, setMail] = useState("");
  const [password,setPassword] = useState("")
  const [gender, setGender] = useState("");
  const [transport, setTransport] = useState("");
  const [nationality,setNationality] = useState("")

  const AddChanges = () => {
    var arrName = JSON.parse(localStorage.getItem("Values") || "[]");

    var Name = {
      first,
      mail,
      password,
      gender,
      transport,
      nationality
    };

    arrName.push(Name);

    localStorage.setItem("Obj", JSON.stringify(arrName));
  };

  return (
    <div className="flex justify-center p-4">
      <form className="border-2 space-y-6 border-black w-max h-max   px-12 py-12">
        <div className="flex space-x-3 text-3xl">
          <a> Name:</a>
          <input
            placeholder="Enter your first name"
            type="text"
            value={first}
            onChange={(e) => {
              setFirst(e.target.value);
            }}
            className="text-xl pl-2 rounded-lg border-2 border-black"
          />
        </div>
        <div className="flex space-x-3 text-3xl">
          <a>Mail:</a>
          <input
            placeholder="Enter your last name"
            value={mail}
            type="text"
            onChange={(e) => {
              setMail(e.target.value);
            }}
            className="text-xl pl-2 rounded-lg border-2 border-black"
          />
        </div>
        <div className="flex space-x-3 text-3xl">
          <a>Password:</a>
          <input
            placeholder="Enter your last name"
            value={password}
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="text-xl pl-2 rounded-lg border-2 border-black"
          />
        </div>
        <div className="flex space-x- text-3xl">
          <a>Gender:</a>
          <input
            type="radio"
            name="gender"
            onChange={(e) => {
              setGender(e.target.value);
            }}
            value="Male"
            className="ml-16"
          />{" "}
          <a className="text-sm mt-2 ml-2">Male</a>
          <input
            type="radio"
            name="gender"
            onChange={(e) => {
              setGender(e.target.value);
            }}
            value="Female"
            className="ml-6"
          />{" "}
          <a className="text-sm mt-2 ml-2">Female</a>
        </div>
        
        <div className="flex space-x- text-3xl">
          <a>Transport List:</a>
          <div className="space-x-">
            <input
              type="radio"
              value="Bike"
              name=""
              onChange={(e) => {
                setTransport(e.target.value);
              }}
              className="ml-12"
            />{" "}
            <a className="text-sm ml-">Bike</a>
            <input
              type="radio"
              value="Car"
              onChange={(e) => {
                setTransport(e.target.value);
              }}
              className="ml-3"
            />{" "}
            <a className="text-sm ml-">Car</a>
            <input
              type="radio"
              value="Bus"
              onChange={(e) => {
                setTransport(e.target.value);
              }}
              className="ml-3"
            />{" "}
            <a className="text-sm ml-">Bus</a>
            <input
              type="radio"
              value="Train"
              onChange={(e) => {
                setTransport(e.target.value);
              }}
              className="ml-3"
            />{" "}
            <a className="text-sm ml-">Train</a>
            <input
              type="radio"
              value="Plane"
              onChange={(e) => {
                setTransport(e.target.value);
              }}
              className="ml-3"
            />{" "}
            <a className="text-sm ml-">Plane</a>
          </div>
          
        </div>
        <div className="text-3xl border-2 border-black w-max ">
            <select onChange={(e) => {
                setNationality(e.target.value);
              }}>
              <option>INDIA</option>
              <option>Canada</option>
              <option>US</option>
              <option>Dubai</option>
            </select>
          </div>
        <div className="space-x-2">
          <button
            onClick={AddChanges}
            className="px-6 font-semibold text-gray-800 rounded-sm py-1 bg-gray-300"
          >
            Save
          </button>
          <button className="px-6 font-semibold text-gray-800 rounded-sm py-1 bg-gray-300">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default Src1;
