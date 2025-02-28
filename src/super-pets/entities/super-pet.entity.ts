import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class SuperPet extends Document{
    @Prop({
        index: true,
        unique: true
    })
    name: string;

    @Prop({
        index: true,
        unique: true
    })
    number: number; 
}

export const SuperPetSchema = SchemaFactory.createForClass(SuperPet);