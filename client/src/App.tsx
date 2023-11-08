import { useState } from "react";
import useCurrentWeather from "./hooks/useCurrentWeather";

const App = () => {
  const { currentWeather, testApi } = useCurrentWeather();
  const [input, setInput] = useState<string>("");

  return (
    <>
      <main>
        <button onClick={testApi}>Click to see what the server says:</button>
        <p>City: {currentWeather?.name}</p>
        <p>Weather: {currentWeather?.weather[0].description}</p>
        <p>Temp: {currentWeather?.main.temp}</p>
      </main>
    </>
  );
};

export default App;
