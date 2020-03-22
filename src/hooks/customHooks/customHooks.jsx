import React, {useCallback, useEffect, useState} from 'react';

// use开头
function useWinSize() {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  });

  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    })
  }, []);

  useEffect(() => {
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    }
  }, [onResize]);

  return size;
}
const CustomHooks = () => {
  const size = useWinSize();

  return (
    <div>页面大小：{size.width}*{size.height}</div>
  );
};

export default CustomHooks;
