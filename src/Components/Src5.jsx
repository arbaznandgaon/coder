import React, { useState } from 'react'

function Src5() {

    const [first,setFirst]=useState('')
    const [last,setLast]=useState('')
    const [gender,setGender]=useState('')


    function Update(){

        let arr=JSON.parse(localStorage.getItem('List') || '[]')

       var Obj={
            first,
            last,
            gender
        }
        arr.push(Obj)

        localStorage.setItem('List',JSON.stringify(arr))


    }



  return (
    <div>

<form className='text-3xl'> 

First Name: <input value={first} onChange={(e)=>{setFirst(e.target.value)}} className='border-2 border-black' /><br/>
Last Name: <input value={last} onChange={(e)=>{setLast(e.target.value)}} className='border-2 border-black mt-4'/><br/>

Gender : <input type={'radio'} value="Male" onChange={(e)=>{setGender(e.target.value)}}/>Male
<input type={'radio'} value="Female" onChange={(e)=>{setGender(e.target.value)}}/>Female
<br/>


<button onClick={Update} className='border-2 border-black mt-4 bg-purple-500 px-2'>Save</button>










</form>

    </div>
  )
}

export default Src5