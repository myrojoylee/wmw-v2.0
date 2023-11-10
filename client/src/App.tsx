// import { useState, useEffect } from "react";
import useCurrentWeather from "./hooks/useCurrentWeather";

const App = (): JSX.Element => {
  const { input, handleInput, handleSubmit, currentWeather } =
    useCurrentWeather();

  return (
    <main className="flex justify-center items-center w-full flex-col h-[100vh] space-y-10">
      <h1 className="flex text-center font-mono text-xl font-bold">
        Tell me if it's hot or cold
      </h1>
      <section className="flex flex-col w-1/2 space-y-2">
        <input
          type="text"
          value={input}
          className="border-2 border-black p-1"
          placeholder="Where you at"
          onChange={handleInput}
        />
        <button
          onClick={() => handleSubmit(input)}
          className="border-black border-2"
        >
          Click to see if it'll snow, rain, or be swelteringly hot!
        </button>
      </section>
      {/* {currentWeather ? ( */}
      <section className="flex flex-col w-1/2">
        <p>City: {currentWeather?.name}</p>
        <p>Weather: {currentWeather?.weather[0].description}</p>
        <p>Temp: {currentWeather?.main.temp}</p>
        <p>Verdict:</p>
      </section>
      {/* ) : null} */}
    </main>
  );
};

export default App;
