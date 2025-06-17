import { useState } from "react";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
function tryConvert(temperature, convert) {
  const input = Number.parseFloat(temperature);

  if (Number.isNaN(input)) {
    return "";
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
  const scale = scaleNames[props.scale];
  const temperature = props.temperature;

  function temperatureChange(e) {
    props.onTemperatureChange(e.target.value);
  }

  return (
    <fieldset>
      <legend>enter temperature in {scale}: </legend>
      <input value={temperature} onChange={temperatureChange} />
    </fieldset>
  );
}
// class TemperatureInput extends React.Component{
//   constructor(props){
//     super(props);
//   }
//   handleChange = (e) => {
//     this.props.onTemperatureChange(e.target.value);
//   }
//   render() {
//     const temperature = this.props.temperature;
//     const scale = this.props.scale;
//     return (
//       <fieldset>
//         <legend>Enter temperature in {scaleNames[scale]}</legend>
//         <input value={temperature} onChange={this.handleChange}/>
//       </fieldset>
//     );
//   }
// }

function Calculator(props) {
  const [{ temperature, scale }, setTemperature] = useState({
    temperature: "",
    scale: "c",
  });

  function handleCelsiusChange(temperature) {
    setTemperature({ scale: "c", temperature: temperature });
  }

  function handleFahrenheitChange(temperature) {
    setTemperature({ scale: "f", temperature: temperature });
  }

  const celsius =
    scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit =
    scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <div>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
      <BoilingVerdict celsius={Number.parseFloat(celsius)} />
    </div>
  );
}

export default Calculator;
