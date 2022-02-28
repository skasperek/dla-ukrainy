import { UnauthorizedException } from "@nestjs/common";
import { MessageBody, OnGatewayConnection, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server, Socket } from 'socket.io';
import { SocketEvent } from "./events/socket.event";
import { SocketService } from "./providers/socket.service";

@WebSocketGateway()
class AppSocket implements OnGatewayConnection {
    constructor(
        private readonly socketService: SocketService,
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

            await this.socketService.getEvents(socket.id, this.server);

            return this.socketService.addUserAsync({
                socketId: socket.id
            })

            
        } catch (error) {
            return this.disconnect(socket);
        }
    }

    async handleDisconnect(
        socket: Socket
    ) {
        await this.socketService.removeUser(socket.id)
    }

    private disconnect(
        socket: Socket
    ){
        socket.emit("Error", new UnauthorizedException());
        socket.disconnect();
    }

    @SubscribeMessage(SocketEvent.ADD_EVENT)
    async addEventAsync(
        @MessageBody() data: any, socket: Socket
    ){
        return await this.socketService.addEvent({
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName,
            server: this.server,
            about: data.about,
            type: data.type,
            peopleCount: data.peopleCount
        })
    }
}

export default AppSocket;