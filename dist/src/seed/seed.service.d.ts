import { SuperPet } from 'src/super-pets/entities/super-pet.entity';
import { Model } from 'mongoose';
import { AxiosAdapter } from 'src/common/http-adapter/axios.adapter';
export declare class SeedService {
    private readonly superPetsModel;
    private readonly axiosAdapter;
    constructor(superPetsModel: Model<SuperPet>, axiosAdapter: AxiosAdapter);
    private readonly axios;
    findAll(): Promise<import("mongoose").MergeType<import("mongoose").Document<unknown, {}, SuperPet> & SuperPet & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, Omit<any, "_id">>[]>;
}
