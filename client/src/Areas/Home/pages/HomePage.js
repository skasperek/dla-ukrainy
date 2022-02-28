import React, {useRef, useContext, useEffect} from "react";

import Navbar from "../../../shared/components/navbar/navbar";
import { 
    MapContent, MapMenu, MapMenuButtons, MapWrapper, MenuTabs, MenuTabsContent,
    SearchTab,
    Tab,
    TabContent,
    TabTitle,
    TabTitleAddons,
    TabTitleAddon,
    AddonTooltip,
    AddonTooltipTail,
    TabIMGBox,
    TabIMG,
    MapMenuButton,
    SearchTools
} from "./style";

import L from "leaflet";
import { AiFillStar } from "react-icons/ai";
import { IoAddCircleOutline } from "react-icons/io5"
import { RiArrowDropDownLine, RiCalendarCheckFill, RiVipDiamondFill } from "react-icons/ri";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import moveInfo from "./moveInfo.css";
import { SocketContext } from "../../../shared/ws/wsContext";
import { GET_EVENT, GET_EVENTS } from "../../../shared/ws/events/wsEvents";
import EventForm from "../components/EventForm";

const HomePage = () => {
    const socket = useContext(SocketContext)
    const mapRef = useRef();

    useEffect(() => {
        socket.on(GET_EVENTS, (data) => {
            console.log(data)
        });

        socket.on(GET_EVENT, (data) => {
            console.log(data)
        })
    }, [socket])

    return (
        <>
            <Navbar home/>
            <EventForm isVisible={true} />
            <MapWrapper blur={true}>
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
                        <MapMenuButton><IoAddCircleOutline className="nav-icon" /> Dodaj</MapMenuButton>
                    </MapMenuButtons>
                    <MenuTabs>
                        <MenuTabsContent>
                            <SearchTab>
                                <TabIMGBox>
                                    <TabIMG />
                                </TabIMGBox>
                                <Tab>
                                    <TabContent>
                                        <TabTitle>
                                            <TabTitleAddons> 
                                                <TabTitleAddon >
                                                    <AddonTooltip><AddonTooltipTail className="nav-icon"/>Idealne dopasowanie</AddonTooltip>
                                                    <RiVipDiamondFill/> Idealny
                                                </TabTitleAddon>
                                                <TabTitleAddon isnew>
                                                    <AddonTooltip><AddonTooltipTail />Obiekt można znaleźć na mapie od [x] dni.</AddonTooltip>
                                                    <AiFillStar/> Nowe
                                                </TabTitleAddon>
                                            </TabTitleAddons>
                                            <span>asdasd</span>
                                        </TabTitle>
                                    </TabContent>
                                </Tab>
                            </SearchTab>
                        </MenuTabsContent>
                    </MenuTabs>
                </MapMenu>
            </MapWrapper>
        </>
    )
}

export default HomePage;