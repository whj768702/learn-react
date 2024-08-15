import React, { useState, useEffect, useLayoutEffect } from 'react';

// useEffect runs asynchronously and after a render is painted to the screen.
/**
 * You cause a render somehow (change state, or the parent re-renders)
 * React renders your component (calls it)
 * useLayoutEffect runs, and React waits for it to finish.
 * The screen is visually updated
 */
const BlinkyRender1 = () => {
  const [value, setValue] = useState(0);

  useLayoutEffect(() => {
    if (value === 0) {
      setValue(10 + Math.random() * 200);
    }
  }, [value]);

  return (
    <div onKeyDown={() => setValue(0)} onClick={() => setValue(0)} className="h-52">
      <span>useLayoutEffect</span>
      value: {value}
    </div>
  );
};

// useLayoutEffect runs synchronously after a render but before the screen is updated.
/**
 * You cause a render somehow (change state, or the parent re-renders)
 * React renders your component (calls it)
 * The screen is visually updated
 * THEN useEffect runs
 */
const BlinkyRender2 = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value === 0) {
      setValue(10 + Math.random() * 200);
    }
  }, [value]);

  return (
    <div onKeyDown={() => setValue(0)} onClick={() => setValue(0)} className="demo">
      <span>useEffect</span>
      value: {value}
    </div>
  );
};
const UseLayoutEffectDemo = () => {
  return (
    <>
      <BlinkyRender1 />
      <BlinkyRender2 />
    </>
  );
};

export default UseLayoutEffectDemo;
