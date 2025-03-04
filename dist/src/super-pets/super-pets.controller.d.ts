import { SuperPetsService } from './super-pets.service';
import { CreateSuperPetDto } from './dto/create-super-pet.dto';
import { UpdateSuperPetDto } from './dto/update-super-pet.dto';
import { PaginationDTO } from 'src/common/dtos/pagination.dto';
export declare class SuperPetsController {
    private readonly superPetsService;
    constructor(superPetsService: SuperPetsService);
    create(createSuperPetDto: CreateSuperPetDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/super-pet.entity").SuperPet> & import("./entities/super-pet.entity").SuperPet & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findAll(paginationDTO: PaginationDTO): Promise<(import("mongoose").Document<unknown, {}, import("./entities/super-pet.entity").SuperPet> & import("./entities/super-pet.entity").SuperPet & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOne(findBy: string): Promise<import("./entities/super-pet.entity").SuperPet>;
    update(updateBy: string, updateSuperPetDto: UpdateSuperPetDto): Promise<{
        name?: string;
        number?: number;
    }>;
    remove(deleteBy: string): Promise<string>;
}
