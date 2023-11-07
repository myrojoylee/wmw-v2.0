import { useState } from "react";
import { currentWeatherType } from "./types";

const App = () => {
  const [currentWeather, setCurrentWeather] =
    useState<currentWeatherType | null>(null);

  async function fetchApiKey() {
    try {
      const apiKeyFetch = await fetch("/api/apiKey");
      const apiKeyFetchData = await apiKeyFetch.json();
      const apiKey = apiKeyFetchData.apiKey;
      return apiKey;
    } catch (e) {
      console.error(e);
    }
  }

  // get coordinates
  async function getCoordinates() {
    const apiKey = await fetchApiKey();
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=Philadelphia&appid=${apiKey}`
    );
    const data = await response.json();
    // console.log(data[0]);
    return data[0];
  }

  const testApi = async () => {
    const apiKey = await fetchApiKey();
    const { lat, lon } = await getCoordinates();
    const responseCurrent = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=Imperial`
    );
    const data = await responseCurrent.json();
    setCurrentWeather(data);
  };

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
