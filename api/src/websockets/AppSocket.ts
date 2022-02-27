import { OnGatewayConnection, SubscribeMessage, WebSocketServer } from "@nestjs/websockets";
import { Server, Socket } from 'socket.io';
import { SocketEvent } from "./events/socket.event";

class AppSocket implements OnGatewayConnection {
    constructor(

    ) {}

    @WebSocketServer()
    server: Server;

    async handleConnection(
        socket: Socket
    ) {
        try {
            const token = socket.handshake.headers.authorization;
            if (token){

            }
        } catch (error) {
            
        }
    }

    async handleDisconnect(
        socket: Socket
    ) {

    }

    @SubscribeMessage(SocketEvent.ADD_EVENT)
    async addEventAsync(){
        
    }
}

export default AppSocket;