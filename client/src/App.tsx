// import { useState, useEffect } from "react";
import Header from "./components/Header";
import Weather from "./components/Weather";
import useCurrentWeather from "./hooks/useCurrentWeather";

const App = (): JSX.Element => {
  const {
    input,
    options,
    handleInput,
    currentWeather,
    handleOptionClick,
    handleSubmit,
  } = useCurrentWeather();

  return (
    <>
      <Header
        input={input}
        options={options}
        handleInput={handleInput}
        handleOptionClick={handleOptionClick}
        handleSubmit={handleSubmit}
      />
      <main className="flex justify-center items-center w-full flex-col h-screen bg-gradient-to-r from-sky-400 via-sky-300 to-sky-600">
        <Weather currentWeather={currentWeather} />
      </main>
    </>
  );
};

export default App;
