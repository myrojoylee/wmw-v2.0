import { cityInfoType, currentWeatherType } from "../types";
import MapBox from "./MapBox";
// import L from "leaflet";

type Props = {
  currentWeather: currentWeatherType;
  cityInfo: cityInfoType;
};

const Weather = ({ currentWeather, cityInfo }: Props): JSX.Element => {
  const formatDate = (unixDate: number, timezone: number) => {
    // console.log(unixDate);
    // console.log(timezone);
    let date = new Date((unixDate - timezone) * 1000);
    return date.toLocaleString();
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
        <section className="flex flex-col w-full m-10 p-2 bg-white gap-5 h-fit">
          <div className="flex flex-col md: flex-row items-center md:justify-between">
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
          <div className="flex w-full flex-col md:flex-row lg:flex-row gap-5">
            <div className="flex flex-col w-1/2">
              <div className="flex flex-col gap-4">
                <div>
                  <p>Current Weather</p>
                  <p>
                    Local time is{" "}
                    {formatTime(currentWeather.dt, currentWeather.timezone)}
                  </p>
                </div>
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
                <p>Description: {currentWeather.weather[0].description}</p>
                <p>Wind: {currentWeather.wind.speed} MPH</p>
                <p>Humidity: {currentWeather.main.humidity} %</p>
              </div>
            </div>
            <MapBox cityInfo={cityInfo} />
            {/* <div className="flex w-full md:w-1/2 h-40 border-2 border-black p-2 rounded-md">
              Map goes here
            </div> */}
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
