import { useState, useEffect } from 'react';

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  }, []);

  const tick = () => {
    setDate(new Date());
  };

  return (
    <div className='flex flex-col items-center'>
      <h1>函数组件</h1>
      <h4>It is {date.toLocaleString()}</h4>
    </div>
  );
}

export default Clock;
