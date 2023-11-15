import { currentWeatherType } from "../types";

type Props = {
  currentWeather: currentWeatherType;
};
const Weather = ({ currentWeather }: Props): JSX.Element => {
  return (
    <section className="flex justify-center w-full h-full">
      {currentWeather ? (
        <section className="flex flex-col w-1/2">
          <p>
            City: {currentWeather?.name}, {currentWeather?.sys.country}
          </p>
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
    </section>
  );
};

export default Weather;
