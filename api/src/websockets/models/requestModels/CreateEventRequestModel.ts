import { Server } from "socket.io";

export class CreateEventRequestModel {
    server: Server;
    email: string;
    firstName: string;
    lastName: string;
    peopleCount: number;
    type: number;
    about: string;
}