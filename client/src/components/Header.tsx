import { ChangeEvent } from "react";
import { cityInfoType } from "../types";
import cloudLoop from "../assets/cloud-loops.mp4";
import wmwIcon from "../assets/whats-my-weather-icon.png";

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
    <header className="relative flex flex-col justify-center items-center w-full overflow-hidden h-52">
      <video
        autoPlay
        loop
        muted
        id="cloud-loop"
        className="absolute z-1 w-auto min-w-full min-h-full max-w-none"
      >
        <source src={cloudLoop} type="video/mp4" />
      </video>

      <section className="relative justify-center items-center flex flex-col lg:flex-row gap-3 lg:gap-2 w-5/6 md:w-1/2 lg:w-5/6 -top-6">
        <div className="flex justify-center items-center w-fit gap-2">
          <img src={wmwIcon} className="w-12 lg:w-16 border-2 border-sky-400" />
          <h1 className="flex text-center font-mono text-l md:text-xl lg:text-3xl font-bold text-white">
            What's My Weather?
          </h1>
        </div>
        <div className="flex w-full h-2/3">
          <input
            type="text"
            value={input}
            className="flex items-center w-full z-10 text-black p-1 m-1 rounded-xl border border-sky-600"
            placeholder="Type in a city"
            onChange={handleInput}
          />
          <button
            onClick={() => handleSubmit(input)}
            className="flex items-center text-white bg-sky-600 border-black rounded-md px-1 hover:bg-slate-100 hover:text-black m-1"
          >
            Go!
          </button>

          {options ? (
            <ul className="absolute bg-white w-3/4 lg:w-3/5 top-24 lg:top-14 rounded-sm m-1 z-20 overflow-scroll">
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
