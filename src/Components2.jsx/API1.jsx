import React, { useState, useEffect } from 'react';

function API1() {
  const [names, setNames] = useState([]);
  const [pic, setPic] = useState([]);


  useEffect(() => {
    fetch('https://panorbit.in/api/users.json') 
      .then(response => response.json())
      .then(data => {console.log(data.users)
        const names = data.users.map(user => user.name)  ;
        const pic = data.users.map(pic => pic.profilepicture) 
        setNames(names);
        setPic(pic)
       
      });
  }, []);

  return (
    <div className="flex justify-center bg-[url('https://www.wallpapertip.com/wmimgs/107-1075266_high-resolution-ocean-water-background.jpg')] bg-cover w-screen h-screen" >
      

<div className='bg-white w-[40rem] h-max rounded-3xl pb-2 mt-40' >
<div className='bg-gray-100 rounded-t-3xl h-24 pt-8 text-2xl font-semibold text-gray-600'>
  <a>Select an account</a>
</div>
<div className='px-4 h-[25rem] scroll-auto overflow-x-auto '>

      <ul>
        {names.map(name => (
          <li className='py-3 text-xl text-gray-700 font-sani space-y-12 border-y' key={name}><a href=''>{name}</a></li>
        ))}
      </ul>
      {/* <ul>
        {pic.map(profilepicture => (
          <li key={profilepicture}><img src={profilepicture}/></li>
        ))}
      </ul> */}
</div>
</div>




    </div>
  );
}

export default API1;
