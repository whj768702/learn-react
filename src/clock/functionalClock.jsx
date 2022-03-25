import React, { useState, useEffect } from 'react';

const FunctionalClock = () => {
  console.log('functional clock');
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => setDate(new Date()), 1000);
    return function () {
      clearInterval(timerID);
    };
  });

  return (
    <div>
      <h1>函数式组件</h1>
      <h2>it is {date.toLocaleString()}</h2>
    </div>
  );
};

export default FunctionalClock;