// import { useState, useEffect } from "react";
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
    <main className="flex justify-center items-center w-full flex-col h-[100vh] space-y-10 bg-gradient-to-r from-cyan-200 to-sky-400">
      <h1 className="flex text-center font-mono text-xl font-bold">
        Tell me if it's hot or cold
      </h1>
      <section className="relative justify-between flex lg:w-2/3 md:w-2/3 sm:w-3/4 w-3/4 border-slate-400 border">
        <input
          type="text"
          value={input}
          className="flex w-7/12 lg:w-3/4 md:w-3/4 sm:w-2/3 z-10 text-black px-1 m-1"
          placeholder="Type in a city"
          onChange={handleInput}
        />
        <button
          onClick={() => handleSubmit(input)}
          className="flex text-white bg-sky-900 border-black rounded-md px-1 hover:bg-slate-100 hover:text-black m-1"
        >
          Get forecast!
        </button>
        {options ? (
          <ul className="absolute bg-white top-8 w-7/12 lg:w-3/4 md:w-3/4 sm:w-2/3 rounded-sm m-1">
            {options.map((option, index) => (
              <li
                key={index}
                className="flex w-full hover:bg-sky-900 hover:text-white px-1 hover:cursor-pointer"
                onClick={() => handleOptionClick(option)}
              >
                {option?.name} {option?.country}
              </li>
            ))}
          </ul>
        ) : null}
      </section>
      <Weather currentWeather={currentWeather} />
    </main>
  );
};

export default App;
