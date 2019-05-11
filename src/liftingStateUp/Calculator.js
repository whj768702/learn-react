import React, { useState } from "react"
import { directive } from "@babel/types";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit"
};

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 /9;
}
function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);

  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>the water would boil.</p>;
  }
  return <p>the water would not boil.</p>;
}
function TemperatureInput(props) {
  function handleChange(e) {
    setTemperature(e.target.value);
  }
  return (
    <fieldset>
      <legend>enter temperature in {scaleNames[props.scale]}: </legend>
      <input type="text" value={props.temperature} onChange={props.onHandleChange} />
    </fieldset>
  );
}
function Calculator(props) {
  const [{temperature, scale}, setTemperature] = useState({temperature:'', scale: 'c'});

  function handleCelsiusChange(temperature) {
    setTemperature({scale: 'f', temperature})
  }

  const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature

  return (
    <div>
      <TemperatureInput temperature={celsius} scale="c"/>
      <TemperatureInput temperature={fahrenheit} scale="f"/>
    </div>
  );
}

export default Calculator
