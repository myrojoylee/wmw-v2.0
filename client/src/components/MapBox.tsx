import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import L from "leaflet";
import { cityInfoType } from "../types";

type Props = {
  cityInfo: cityInfoType;
};

const MapBox = ({ cityInfo }: Props): JSX.Element => {
  //   const [lat, setLat] = useState<number | any>(null);
  //   const [lon, setLon] = useState<number | any>(null);
  const lat = cityInfo.lat;
  const lon = cityInfo.lon;

  //   console.log(lat);
  //   console.log(lon);

  //   setLat(cityInfo.lat);
  //   setLon(cityInfo.lon);

  return (
    <>
      {cityInfo ? (
        <MapContainer center={[lat, lon]} zoom={10} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <TileLayer
            maxZoom={10}
            opacity={3}
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=021e75b0e3380e236b4ff6031ae2dde4"
          />
          <Marker position={[lat, lon]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      ) : null}
    </>
  );
};

export default MapBox;
