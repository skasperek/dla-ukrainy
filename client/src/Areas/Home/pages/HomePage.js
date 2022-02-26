import React, {useRef} from "react";

import Navbar from "../../../shared/components/navbar/navbar";
import { MapContent, MapMenu, MapMenuButtons, MapWrapper,  } from "./style";

import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import moveInfo from "./moveInfo.css";

const HomePage = () => {
    const mapRef = useRef();

    return (
        <>
            <Navbar home/>
            <MapWrapper blur={false}>
                <MapContent>
                    <MapContainer 
                        whenCreated={ mapInstance => { mapRef.current = mapInstance }}
                        center={[50.772563974351456, 23.629687374915488]} 
                        zoom={7} 
                        scrollWheelZoom={true} 
                        style={moveInfo}
                        minZoom={6}
                    >
                        <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                             <Marker position={[52.237049, 21.017532]}></Marker>
                    </MapContainer>
                </MapContent>
                <MapMenu showMenu={true}>
                    <MapMenuButtons>
                        a
                    </MapMenuButtons>
                </MapMenu>
            </MapWrapper>
        </>
    )
}

export default HomePage;