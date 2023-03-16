import React, { useState, useEffect } from 'react';
import API3 from './API1';

function API2(props) {
  const [names, setNames] = useState([]);
  const [user,setUser] = useState(null)

  useEffect(() => {
    fetch('https://panorbit.in/api/users.json')
      .then(response => response.json())
      .then(data => {
        const names = data.users.map(user => user.name);
        console.log(names)
        setNames(names);
      });
  }, []);

  return (
    <div>
      <h1>All Names:</h1>
      <ul>
        {names.map(nam => (
          <li  key={nam}>{nam}</li>
        ))}
      </ul>


{/* <button onClick={props.get}>Working</button> */}

      {/* <a>{names}</a> */}
    </div>
  );
}

export default API2;
