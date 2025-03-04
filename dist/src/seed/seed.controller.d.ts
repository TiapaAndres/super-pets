import { SeedService } from './seed.service';
export declare class SeedController {
    private readonly seedService;
    constructor(seedService: SeedService);
    findAll(): Promise<import("mongoose").MergeType<import("mongoose").Document<unknown, {}, import("../super-pets/entities/super-pet.entity").SuperPet> & import("../super-pets/entities/super-pet.entity").SuperPet & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, Omit<any, "_id">>[]>;
}
