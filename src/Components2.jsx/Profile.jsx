import React from 'react'

function Profile() {
  return (
    <div className='flex'>
<div className='w-1/6  text-white text-xl   mt-12 ml-12 bg-gradient-to-l from-blue-800 to-blue-700 rounded-3xl h-screen'>
   <div className='flex flex-col justify-center  px-8  h-screen'>
   <a className='border-b py-4  border-white/50'>Profile</a>
   <a className='border-b py-4  border-white/50'> Posts</a>
   <a className='border-b py-4  border-white/50'>Gallery</a>
   <a className=' py-4 '>ToDo</a>
   </div>
   
</div>
<div>
<div  className='flex w-[70rem] px-8 borde ml-3 border-b-2 h-20 mt-12 justify-between'>
   <a className='font-bold text-gray-600 text-2xl'>Profile</a>
   <div className='flex space-x-2'>
    <img className='rounded-full w-10 h-10' src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSKhHw3zCP-l2JRNZYugMn-RNAwB_QksOfJWnQfOVaeHUzxUEo3'/>
   <a className='text-xl mt-2'>Leanne Graham</a>
   </div>
</div>
<div className='flex pt-12'>
<div className='px- ml-16 w-[27rem] border-r-2'>
<div className='flex flex-col'>
<img className='rounded-full  ml-20 w-48 h-48' src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSKhHw3zCP-l2JRNZYugMn-RNAwB_QksOfJWnQfOVaeHUzxUEo3'/>
<a className='text-xl font-semibold ml-24 mt-2 flex justify-start'>Leanne Graham</a>
<div className='flex border-b-2 w-96 pb-7'>
<div className='grid space-y-4 w-auto justify-items-end'>
<a className='text-2xl text-gray-500 mt-2 flex justify-start'>User Name : </a> 

<a className='text-2xl text-gray-500 mt-2 flex justify-start'>e-mail : </a>

<a className='text-2xl text-gray-500 mt-2 flex justify-start'>Phone :</a>

<a className='text-2xl text-gray-500 mt-2 flex justify-start'>Website : </a>
</div>
<div className='grid space-y-4 justify-items-start  text-gray-600 text-2xl font-semibold mt-2 ml-3' >
    <a>Bret</a>
    <a>Sincere@april.biz</a>
    <a>99999999999</a>
    <a>leannegraham.com</a>
</div>
</div>
<div className='flex flex-col justify-items-start  text-2xl'>
    <a className='text-gray-500'>Company</a>
    <div className='flex flex-col'>
<a className='text-gray-500'>Name : <a className='text-gray-600 font-semibold'>lisjkdvk</a></a>
<a className='text-gray-500'> Catchphrase : <a className='text-gray-600 font-semibold'>sghaha</a></a>
<a className='text-gray-500'>bs: <a className='text-gray-600 font-semibold'>dfhsn :</a></a>

    </div>
    {/* <div className=''>

    </div> */}
</div>


</div>
</div>
<div className='px-12 flex flex-col'>
    <a className='text-xl text-gray-400 font-semibold'>Address :</a>
    <a className='text-gray-500 text-xl'>Street : <a className='text-gray-600 font-semibold'>Kulas Light</a></a>
</div>
</div>

</div>

    </div>
  )
}

export default Profile