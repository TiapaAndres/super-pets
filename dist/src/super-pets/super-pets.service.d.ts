import { CreateSuperPetDto } from './dto/create-super-pet.dto';
import { UpdateSuperPetDto } from './dto/update-super-pet.dto';
import { Model } from 'mongoose';
import { SuperPet } from './entities/super-pet.entity';
import { PaginationDTO } from 'src/common/dtos/pagination.dto';
import { ConfigService } from '@nestjs/config';
export declare class SuperPetsService {
    private readonly superPetsModel;
    private readonly configService;
    constructor(superPetsModel: Model<SuperPet>, configService: ConfigService);
    create(createSuperPetDto: CreateSuperPetDto): Promise<import("mongoose").Document<unknown, {}, SuperPet> & SuperPet & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findAllSuperpets(paginationDTO: PaginationDTO): Promise<(import("mongoose").Document<unknown, {}, SuperPet> & SuperPet & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOneSuperpet(findBy: string): Promise<SuperPet>;
    updateSuperPet(updateBy: string, updateSuperPetDto: UpdateSuperPetDto): Promise<{
        name?: string;
        number?: number;
    }>;
    remove(deleteBy: string): Promise<string>;
}
