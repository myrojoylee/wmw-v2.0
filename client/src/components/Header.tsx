import { ChangeEvent } from "react";
import { cityInfoType } from "../types";
import cloudLoop from "../assets/cloud-loops.mp4";

type Props = {
  input: string;
  options: any[];
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOptionClick: (option: cityInfoType) => void;
  handleSubmit: (input: string) => void;
};

const Header = ({
  input,
  options,
  handleInput,
  handleOptionClick,
  handleSubmit,
}: Props): JSX.Element => {
  return (
    <header className="relative flex flex-col justify-center items-center overflow-hidden w-full h-52">
      <video
        autoPlay
        loop
        muted
        id="cloud-loop"
        className="absolute z-1 w-auto min-w-full min-h-full max-w-none"
      >
        <source src={cloudLoop} type="video/mp4" />
      </video>

      <section className="relative justify-between flex flex-col lg:w-2/3 md:w-2/3 sm:w-3/4 w-3/4 border-slate-400 border">
        <div>
          <h1 className="flex text-center font-mono text-xl font-bold">
            Tell me if it's hot or cold
          </h1>
        </div>
        <div className="flex">
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
        </div>
      </section>
    </header>
  );
};

export default Header;
