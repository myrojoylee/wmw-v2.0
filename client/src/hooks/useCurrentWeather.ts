import { useState, useEffect, ChangeEvent } from "react";
import { currentWeatherType, cityInfoType } from "../types";

const useCurrentWeather = () => {
  const [input, setInput] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [cityInfo, setCityInfo] = useState<cityInfoType | any>("");
  const [currentWeather, setCurrentWeather] =
    useState<currentWeatherType | null>(null);

  //   useEffect(() => {
  //     const renderUponLoad = async () => {
  //       const data = await getCoordinates("Philadelphia");

  //       await getCurrentWeather(data);
  //       console.log(data);
  //     };

  //     try {
  //       renderUponLoad();
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   }, [""]);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trimStart();
    setInput(value);
    if (value === "") {
      setCityInfo("");
    }
    return input;
  };

  async function fetchApiKey() {
    try {
      const apiKeyFetch = await fetch("/api/apiKey");
      const apiKeyFetchData = await apiKeyFetch.json();
      const apiKey = apiKeyFetchData.apiKey;
      console.log(apiKey);
      return apiKey;
    } catch (e) {
      console.error(e);
    }
  }

  // get coordinates
  async function getCoordinates(input: string) {
    try {
      const apiKey = await fetchApiKey();
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${input}&appid=${apiKey}`
      );
      const data = await response.json();
      return data;
    } catch (e) {
      console.error(e);
    }
  }

  // get current weather
  const getCurrentWeather = async (cityInfo: cityInfoType) => {
    try {
      const data = await getCoordinates(input);
      setCityInfo(data[0]);
      const apiKey = await fetchApiKey();
      const responseCurrent = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${cityInfo.lat}&lon=${cityInfo.lon}&appid=${apiKey}&units=Imperial`
      );
      const todaysWeather = await responseCurrent.json();
      setCurrentWeather(todaysWeather);
      return currentWeather;
    } catch (e) {
      console.error(e);
    }
  };

  // getting weather when you click button
  async function handleSubmit(input: string) {
    try {
      const data = await getCoordinates(input);
      await getCurrentWeather(data[0]);
    } catch (e) {
      console.error(e);
    }

    return;
  }

  return {
    input,
    cityInfo,
    searchTerm,
    handleInput,
    handleSubmit,
    currentWeather,
    getCurrentWeather,
  };
};

export default useCurrentWeather;
