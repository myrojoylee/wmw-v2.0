import { useState, useEffect, ChangeEvent } from "react";
import { currentWeatherType, cityInfoType } from "../types";

const useCurrentWeather = () => {
  const [input, setInput] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [options, setOptions] = useState<any[]>([]);
  const [cityInfo, setCityInfo] = useState<cityInfoType | any>("");
  const [currentWeather, setCurrentWeather] = useState<
    currentWeatherType | any
  >("");
  const [optionClick, setOptionClick] = useState<boolean>(false);

  //   useEffect(() => {
  //     const renderUponLoad = async () => {
  //       try {
  //         const data = await getCoordinates("Philadelphia");
  //         await getCurrentWeather(data[0]);
  //         return currentWeather;
  //       } catch (e) {
  //         console.error(e);
  //       }
  //     };

  //     try {
  //       renderUponLoad();
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   }, []);

  const handleInput = async (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trimStart();
    setInput(value);
    if (value.length > 1) {
      const data = await generateOptionList(value);
      return data;
    } else {
      setOptions([""]);
    }
    return input;
  };

  const handleOutsideClick = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("did i click outside somewhere?");
    setOptions([""]);
  };

  async function fetchApiKey() {
    try {
      const apiKeyFetch = await fetch("/api/apiKey");
      const apiKeyFetchData = await apiKeyFetch.json();
      const apiKey = apiKeyFetchData.apiKey;
      //   console.log(apiKey);
      return apiKey;
    } catch (e) {
      console.error(e);
    }
  }

  async function generateOptionList(input: string) {
    try {
      const apiKey = await fetchApiKey();
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${input.trimStart()}&appid=${apiKey}&limit=20`
      );

      const data = await response.json();
      setOptions(data);
      return data;
    } catch (e) {
      console.error(e);
    }
  }

  const handleOptionClick = (data: cityInfoType) => {
    // setSearchTerm(data.name);
    setInput(data.name);
    setOptions([""]);
    setOptionClick(true);
    console.log(input);
    return input;
  };

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
      //   setCurrentWeather();
      //   console.log(currentWeather);
      //   console.log(input);
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
      //   console.log(searchTerm);
      //   console.log(optionClick);

      if (optionClick) {
        setInput(searchTerm);
      }
      //   console.log(input);
      const data = await getCoordinates(input);
      await getCurrentWeather(data[0]);
      //   console.log(currentWeather);
      setOptions([""]);
    } catch (e) {
      console.error(e);
    }

    return;
  }

  return {
    input,
    options,
    cityInfo,
    searchTerm,
    handleInput,
    handleOptionClick,
    generateOptionList,
    handleSubmit,
    currentWeather,
    getCurrentWeather,
  };
};

export default useCurrentWeather;
