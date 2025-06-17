import { useContext } from "react";
import { ColorContext } from "./color";

function ShowArea() {
  // 使用共享的状态
  const { color } = useContext(ColorContext);
  return <div style={{ color: color }}>字体颜色</div>;
}

export default ShowArea;
