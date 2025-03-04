import { Document } from 'mongoose';
export declare class SuperPet extends Document {
    name: string;
    number: number;
}
export declare const SuperPetSchema: import("mongoose").Schema<SuperPet, import("mongoose").Model<SuperPet, any, any, any, Document<unknown, any, SuperPet> & SuperPet & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, SuperPet, Document<unknown, {}, import("mongoose").FlatRecord<SuperPet>> & import("mongoose").FlatRecord<SuperPet> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
