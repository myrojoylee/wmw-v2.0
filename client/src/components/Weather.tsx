import { currentWeatherType } from "../types";

type Props = {
  currentWeather: currentWeatherType;
};
const Weather = ({ currentWeather }: Props): JSX.Element => {
  const formatDate = (unixDate: number, timezone: number) => {
    let date = new Date((unixDate + timezone) * 1000);
    return date.toUTCString();
  };

  //   const getDayName = (unixDate: number, timezone: number) => {
  //     let date = new Date((unixDate + timezone) * 1000);
  //     return date.toLocaleTimeString();
  //   };

  const formatTime = (unixDate: number, timezone: number) => {
    let date = new Date(unixDate * 1000);
    return date.toLocaleTimeString();
  };

  return (
    <>
      {currentWeather ? (
        <section className="flex flex-col w-full m-10 p-2 bg-white">
          <div className="flex items-center justify-between">
            <p className="text-2xl font-light">
              <span className="uppercase font-bold">
                {currentWeather?.name}
              </span>
              , <span>{currentWeather?.sys.country}</span>
            </p>
            <p>
              Local Date:{" "}
              {formatDate(currentWeather.dt, currentWeather.timezone)}
            </p>
          </div>
          <div>
            <p>Current Weather</p>
            <p>
              Local time is{" "}
              {formatTime(currentWeather.dt, currentWeather.timezone)}
            </p>
            <div className="flex items-center text-4xl">
              <p>{Math.round(currentWeather.main.temp)} &deg;F</p>
              {currentWeather.weather[0] ? (
                <>
                  <img
                    src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}.png`}
                  />
                </>
              ) : null}
            </div>
          </div>
          <div className="weather-today-stats">
            <p>{currentWeather.weather[0].description}</p>
            <p>Wind: {currentWeather.wind.speed} MPH</p>
            <p>Humidity: {currentWeather.main.humidity} %</p>
          </div>
        </section>
      ) : (
        <section className="flex flex-col w-full m-10 bg-white">
          <p>City: Loading...</p>
          <p>Weather: Loading...</p>
          <p>Temp: Loading...</p>
          <p>Verdict: Loading...</p>
        </section>
      )}
    </>
  );
};

export default Weather;
