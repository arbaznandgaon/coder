import React, { useState } from 'react'

function Src3() {
    const [company,setCompany]=useState('')
    const [employe,setEmploye]=useState('')

var update=()=>{

        var arr1=JSON.parse(localStorage.getItem('List') ||'[]')

    var object={
        company,
        employe
    }

arr1.push(object)

    localStorage.setItem('List',JSON.stringify(arr1))
}


  return (
    <div>
<form className='text-4xl mt-40'>
    <a>Company Name :</a> <input value={company} onChange={(e)=>{setCompany(e.target.value)}}  placeholder=' Enter Name' className='border-2 border-black'/><br/>
    <a>Employe Name : </a> <input value={employe} onChange={(e)=>{setEmploye(e.target.value)}}  placeholder=' Enter Name' className='border-2 border-black mt-2 ml-4' />
<button onClick={update}>Save</button>
</form>





    </div>
  )
}

export default Src3