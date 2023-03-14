import React, { useState } from 'react'

function Src4() {

    const[student,setStudent]=useState('')
    const[grade,setGrade]=useState('')
    const[gender,setGender]=useState('')


var update=()=>{

    var store= JSON.parse(localStorage.getItem('Output') || '[]')

var object={
    student,
    grade,
    gender
}
    
    store.push(object)

        localStorage.setItem('Output', JSON.stringify(store))

}



  return (
    <div>
        <form className='text-4xl mt-40'>
    <a>Company Name :</a> <input value={student} onChange={(e)=>{setStudent(e.target.value)}} placeholder=' Enter Name' className='border-2 border-black'/><br/>
    <a>Employe Name : </a> <input value={grade} onChange={(e)=>{setGrade(e.target.value)}} placeholder=' Enter Name' className='border-2 border-black mt-2 ml-4' />

<br/>
<div>
<a>{gender}</a><br/>

<input name="gender" type='radio' value="Male" onChange={(e)=>{setGender(e.target.value)}}/>Male
<input name="gender" type='radio' value="Female" onChange={(e)=>{setGender(e.target.value)}}/>Female

</div>
<button onClick={update}>Save</button>
</form>
</div>
  )
}

export default Src4