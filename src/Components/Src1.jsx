import React from "react";
import { useState } from "react";

function Src1() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [gender, setGender] = useState("");
  const [sem, setSem] = useState("");
  const [hobby, setHobby] = useState("");

  const AddChanges = () => {
    var arrName = JSON.parse(localStorage.getItem("Obj") || "[]");

    var Name = {
      first,
      last,
      gender,
      sem,
      hobby,
    };

    arrName.push(Name);

    localStorage.setItem("Obj", JSON.stringify(arrName));
  };

  return (
    <div className="flex justify-center p-4">
      <form className="border-2 space-y-6 border-black w-max h-max   px-12 py-12">
        <div className="flex space-x-3 text-3xl">
          <a>First Name:</a>
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
          <a>Last Name:</a>
          <input
            placeholder="Enter your last name"
            value={last}
            type="text"
            onChange={(e) => {
              setLast(e.target.value);
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
        <div className="flex space-x-3 text-3xl">
          <a>Semester:</a>
          <input
            value={sem}
            onChange={(e) => {
              setSem(e.target.value);
            }}
            className="text-xl pl-2 rounded-lg border-2 border-black"
          />
        </div>
        <div className="flex space-x- text-3xl">
          <a>Hobby:</a>
          <div className="space-x-">
            <input
              type="radio"
              value="Cricket"
              name=""
              onChange={(e) => {
                setHobby(e.target.value);
              }}
              className="ml-12"
            />{" "}
            <a className="text-sm ml-">Cricket</a>
            <input
              type="radio"
              value="Coding"
              onChange={(e) => {
                setHobby(e.target.value);
              }}
              className="ml-3"
            />{" "}
            <a className="text-sm ml-">Coding</a>
            <input
              type="radio"
              value="Travelling"
              onChange={(e) => {
                setHobby(e.target.value);
              }}
              className="ml-3"
            />{" "}
            <a className="text-sm ml-">Travelling</a>
          </div>
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
