import { useState, useEffect } from 'react';

const FunctionalClock = () => {
  console.log('functional clock');
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => setDate(new Date()), 1000);
    return () => {
      clearInterval(timerID);
    };
  });

  return (
    <div className='flex flex-col items-center'>
      <h1>函数式组件</h1>
      <h4>it is {date.toLocaleString()}</h4>
    </div>
  );
};

export default FunctionalClock;