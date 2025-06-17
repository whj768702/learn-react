import Buttons from "./button";
import { Color } from "./color";
import ShowArea from "./showArea";

function ReducerDemo() {
  return (
    <div>
      <Color>
        <ShowArea />
        <Buttons />
      </Color>
    </div>
  );
}

export default ReducerDemo;
