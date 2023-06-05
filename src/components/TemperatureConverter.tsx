import React from "react";

interface TemperatureConverterProps {
  kelvin: number;
}

const TemperatureConverter: React.FC<TemperatureConverterProps> = ({ kelvin }) => {
  const convertKelvinToCelsius = (kelvin: number): number => {
    return kelvin - 273.15; // Formula to convert Kelvin to Celsius
  };

  const celsius = convertKelvinToCelsius(kelvin);

  return (
    <div className="flex items-top">
      {Math.round(celsius)} <span className="text-3xl">°C</span>{" "}
    </div>
  );
};

export default TemperatureConverter;
