import React from 'react'

function API3(props) {

function randomNum(){

var arr=[1,8,9,1,2,3,4,5,6,7,8,9,0]

var randomnumber= Math.floor(Math.random() * arr.length)
document.getElementById('msg').innerHTML= randomnumber;


}



  return (
    <div className='bg-black h-screen'>
<a id='msg'></a>
<button onClick={props.gets}>Click Me</button>


    </div>
  )
}

export default API3