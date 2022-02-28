import React, {createContext} from "react";
import {io} from "socket.io-client"
import { ADD_EVENT } from "./events/wsEvents";

const socket = io("http://localhost:2053");
const SocketContext = createContext(socket);

const SocketProvider = ({ children }) => {
    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
};

const setTokenHeader = (token) => {
    socket.io.opts.extraHeaders = {
        "Authorization": token
    }

    socket.disconnect().connect();
}

const addEvent = ({email, message}) => {
    const payload = {email, message}

    socket.emit(ADD_EVENT, payload);
}

export {
    SocketContext, SocketProvider, setTokenHeader, addEvent
}