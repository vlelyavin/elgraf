import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import "./Map.css";
import { Container } from "../../../components/Container";

export const Map = () => {
  const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY });
  if (!isLoaded) return <p>Loading...</p>;
  return (
    <Container>
      <GoogleMap zoom={5} center={{ lat: 48.777702, lng: 22.588938 }} mapContainerClassName="map__container">
        <MarkerF position={{ lat: 49.685118742604, lng: 22.764310051611773 }} />

        <MarkerF position={{ lat: 46.991272088028694, lng: 6.932147916859802 }} />

        <MarkerF position={{ lat: 48.200727107341024, lng: 16.338850913710647 }} />

        <MarkerF position={{ lat: 49.793403531298125, lng: 24.007879047363808 }} />

        <MarkerF position={{ lat: 50.45307568641193, lng: 30.522633060156316 }} />

        <MarkerF position={{ lat: 50.62306156500826, lng: 26.256784896384033 }} />
      </GoogleMap>
    </Container>
  );
};
