import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    
    @Prop({type: String, required: true, unique: true})
    email: string;

    @Prop({type: String, required: true})
    firstName: string;

    @Prop({type: String, required: true})
    lastName: string;

    @Prop({type: String, required: true})
    password: string;

    @Prop({type: String, required: true})
    phoneCountry: string;

    @Prop({type: String, required: true})
    phone: string;

    @Prop({type: String, required: true})
    city: string;

    @Prop({type: String, required: false})
    secondPhoneCountry: string;

    @Prop({type: String, required: false})
    secondPhone: string;

    @Prop({type: [String], default: ["*"]})
    roles: string[];

    @Prop({type: Number, required: true})
    visibleContactType: number; //0 - email 1 - tel, 2 - wszystko
}

export const UserSchema = SchemaFactory.createForClass(User);