import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { response } from "express";
import { Model } from "mongoose";
import { Server } from "socket.io";
import { EventDocument, Event } from "src/schemas";
import { SocketEvent } from "../events/socket.event";
import { CreateEventRequestModel, UserRequestModel } from "../models";

@Injectable()
export class SocketService {

    private users = [];
    constructor(
        @InjectModel(Event.name) private readonly eventModel: Model<EventDocument>,
    ){}

    async addUserAsync(
        data: UserRequestModel
    ){
        let response = {
            socketId: data.socketId
        }

        !this.users.some((user) => user.socketId === data.socketId) &&
            this.users.push(response)
    }

    async getUser(
        socketId: string
    ){
        const user = this.users.find((user) => user.socketId === socketId);
        if (user){
            return user;
        }

        return false;
    }

    async removeUser(
        socketId: string
    ){
        this.users = this.users.filter((user) => user.socketId !== socketId);
    }

    async addEvent(
        data: CreateEventRequestModel
    ){
        // const user = await this.getUser(data.socketId);
        // if (user != null){
        //     const event = new this.eventModel({
        //         type: data.type,
        //         about: data.about
        //     });

        //     await event.save();

        //     data.server.emit(SocketEvent.GET_EVENT), {
        //         type: data.type,
        //         about: data.about,
        //         peopleCount: data.peopleCount
        //     }
        // }

        const event = new this.eventModel({
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName,
            type: data.type,
            about: data.about,
            peopleCount: data.peopleCount
        });
    
        await event.save();

        data.server.emit(SocketEvent.GET_EVENT), {
            type: data.type,
            about: data.about,
            peopleCount: data.peopleCount
        }
    }

    async getEvents(socketId: string, server: Server){
        const events = await this.eventModel.find();
        if (events.length > 0){
            server.to(socketId).emit(SocketEvent.GET_EVENTS, events);
        }
    }
}