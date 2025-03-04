"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperPetsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const super_pet_entity_1 = require("./entities/super-pet.entity");
const mongoose_2 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
let SuperPetsService = class SuperPetsService {
    constructor(superPetsModel, configService) {
        this.superPetsModel = superPetsModel;
        this.configService = configService;
    }
    async create(createSuperPetDto) {
        try {
            createSuperPetDto.name = createSuperPetDto.name.toLowerCase();
            const superPet = await this.superPetsModel.create(createSuperPetDto);
            return superPet;
        }
        catch (error) {
            if (error.code === 11000) {
                throw new common_1.BadRequestException(`La super-mascota ya existe en Db: ${JSON.stringify(error.keyValue)}`);
            }
            else {
                console.log(error);
                throw new common_1.BadRequestException('No se pudo crear la mascota: Error desconocido', error);
            }
        }
    }
    async findAllSuperpets(paginationDTO) {
        const setLimit = +paginationDTO.limit || this.configService.get('default_limit');
        const superPets = await this.superPetsModel.find()
            .limit(setLimit)
            .skip(paginationDTO.offset)
            .select('-__v');
        console.log('🔰 default_limit: ', setLimit);
        return superPets;
    }
    async findOneSuperpet(findBy) {
        let superPet;
        if ((0, mongoose_1.isValidObjectId)(findBy)) {
            superPet = await this.superPetsModel.findById(findBy);
        }
        if (!isNaN(Number(findBy))) {
            superPet = await this.superPetsModel.findOne({ number: findBy });
        }
        if (!superPet) {
            superPet = await this.superPetsModel.findOne({ name: findBy.toLowerCase() });
        }
        if (!superPet) {
            throw new common_1.BadRequestException(`La busqueda de super-mascota con '${findBy}' no se encontró o no existe`);
        }
        return superPet;
    }
    async updateSuperPet(updateBy, updateSuperPetDto) {
        console.log('updateBy: ', updateBy);
        const updatedSuperPet = await this.findOneSuperpet(updateBy);
        updateSuperPetDto?.name ? updateSuperPetDto.name.toLowerCase() : updateSuperPetDto;
        try {
            await updatedSuperPet.updateOne(updateSuperPetDto);
            return { ...updatedSuperPet.toJSON(), ...updateSuperPetDto };
        }
        catch (error) {
            if (error.code === 11000) {
                throw new common_1.BadRequestException(`Ya existe en Db la mascota: ${JSON.stringify(error.keyValue)}`);
            }
            else {
                console.log(error);
                throw new common_1.BadRequestException('No se pudo actualizar la mascota: Error desconocido', error);
            }
        }
    }
    async remove(deleteBy) {
        const deleteSuperPet = await this.superPetsModel.deleteOne({ _id: deleteBy });
        if (deleteSuperPet.deletedCount === 0) {
            throw new common_1.BadRequestException(`La super-mascota no existe en Db: ${deleteBy}`);
        }
        return `Deleted SuperPet con id '${JSON.stringify(deleteBy)}'`;
    }
};
exports.SuperPetsService = SuperPetsService;
exports.SuperPetsService = SuperPetsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(super_pet_entity_1.SuperPet.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        config_1.ConfigService])
], SuperPetsService);
//# sourceMappingURL=super-pets.service.js.map