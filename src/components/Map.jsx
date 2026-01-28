import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MapComponent() {
    return (
        <div className="map-wrapper">
            <MapContainer
                center={[40.9436488, 14.2185095]}
                zoom={15}
                className="map-container"
                scrollWheelZoom={false}  // più elegante per i siti vetrina
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={[40.9436488, 14.2185095]}>
                    <Popup>
                        <div className="popup-content">
                            <img
                                src={"/Documento224.png"}
                                alt="Nome Azienda"
                                className="popup-logo"
                            />
                            <div>
                                Strada Statale Appia 7/bis Km 18,600
                                <br />
                                <b>80029 Sant'Antimo (NA)</b>
                            </div>
                        </div>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default MapComponent;