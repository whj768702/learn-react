import React, { useState } from 'react';

const UseStateDemo = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>clicked {count} times.</p>
      <button onClick={()=>{setCount(count+1)}}>click</button>
    </div>
  );
}

export default UseStateDemo;
