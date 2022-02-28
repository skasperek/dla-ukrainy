import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from 'mongoose';
import * as moment from "moment";

export type EventDocument = Event & Document;

@Schema()
export class Event {
    
    @Prop({type: String, required: true, unique: true})
    email: string;

    @Prop({type: String, required: true})
    firstName: string;

    @Prop({type: String, required: true})
    lastName: string;

    @Prop({type: Number, required: true})
    type: number; //0 - oczekuje pomcy, 1-Zbiórka, 2 - Wsparcie, 3 - kierowca

    @Prop({type: String, required: true})
    about: string;

    @Prop({type: String})
    cost: string;

    @Prop({type: Date, default: Date.now()})
    from: Date

    @Prop({type: String})
    long: string;

    @Prop({type: Boolean})
    ableToCome: boolean;

    @Prop({type: String})
    howAbleToCome: string;

    @Prop({type: String})
    additionalInfo: string;

    @Prop({type: Number, required: true})
    peopleCount: number; //wsparcie dla ilu

    @Prop({type: Date, default: Date.now()})
    createdDate: Date;

    @Prop({type: Date, default: moment().add(3, "d").toDate()})
    expiredDate: Date;
}

const EventSchema = SchemaFactory.createForClass(Event);

EventSchema.index({ "expiredDate": 1 }, { expireAfterSeconds: 0 } )

export {
    EventSchema
}