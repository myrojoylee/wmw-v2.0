export type cityInfoType = {
  country: string;
  lat: number;
  lon: number;
  name: string;
  state: string;
};

export type currentWeatherType = {
  dt: number;
  name: string;
  main: {
    humidity: number;
    temp: number;
  };
  sys: {
    country: string;
  };
  timezone: number;
  weather: {
    0: {
      description: string;
      icon: string;
    };
  };
  wind: {
    speed: number;
  };
};
