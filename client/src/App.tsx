// import { useState, useEffect } from "react";
import useCurrentWeather from "./hooks/useCurrentWeather";

const App = (): JSX.Element => {
  const { input, options, handleInput, handleSubmit, currentWeather } =
    useCurrentWeather();

  return (
    <main className="flex justify-center items-center w-full flex-col h-[100vh] space-y-10">
      <h1 className="flex text-center font-mono text-xl font-bold">
        Tell me if it's hot or cold
      </h1>
      <section className="relative flex w-3/4 md:w-3/4 lg:w-1/2 justify-center items-center border-2 border-grey p-1">
        <input
          type="text"
          value={input}
          className="flex w-3/4 p-1"
          placeholder="Type in a city"
          onChange={handleInput}
        />
        <button
          onClick={() => handleSubmit(input)}
          className="flex border-black border-2 rounded-md px-1"
        >
          Get forecast!
        </button>
      </section>

      {options ? (
        <section className="absolute flex flex-col border-2 w-1/2 bg-white my-2 top-20">
          {options.map((option, index) => (
            <p key={index}>{option?.name}</p>
          ))}
        </section>
      ) : null}
      
      {currentWeather ? (
        <section className="flex flex-col w-1/2">
          <p>City: {currentWeather?.name}</p>
          <p>Weather: {currentWeather?.weather[0].description}</p>
          <p>Temp: {currentWeather?.main.temp}</p>
          <p>Verdict:</p>
        </section>
      ) : (
        <section className="flex flex-col w-1/2">
          <p>City: Loading...</p>
          <p>Weather: Loading...</p>
          <p>Temp: Loading...</p>
          <p>Verdict: Loading...</p>
        </section>
      )}
    </main>
  );
};

export default App;
