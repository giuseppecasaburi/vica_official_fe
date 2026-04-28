import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MapComponent() {
    return (
        <div className="map-wrapper">
            <MapContainer
                center={[40.943926172880325, 14.218852315344993]}
                zoom={15}
                className="map-container"
                scrollWheelZoom={false}  // più elegante per i siti vetrina
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={[40.943926172880325, 14.218852315344993]}>
                    <Popup>
                        <div className="popup-content">
                            <img
                                src={"/Documento224.png"}
                                alt="Nome Azienda"
                                className="popup-logo"
                            />
                            <div>
                                Via Apollo, 5
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