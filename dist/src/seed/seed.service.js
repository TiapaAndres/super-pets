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
exports.SeedService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const mongoose_1 = require("@nestjs/mongoose");
const super_pet_entity_1 = require("../super-pets/entities/super-pet.entity");
const mongoose_2 = require("mongoose");
const axios_adapter_1 = require("../common/http-adapter/axios.adapter");
let SeedService = class SeedService {
    constructor(superPetsModel, axiosAdapter) {
        this.superPetsModel = superPetsModel;
        this.axiosAdapter = axiosAdapter;
        this.axios = axios_1.default;
    }
    async findAll() {
        let loadingSuperPet = [];
        try {
            const data = await this.axiosAdapter.get('https://pokeapi.co/api/v2/pokemon?limit=650');
            data.results.forEach((superPet) => {
                const gettingId = superPet.url.split('/');
                const number = gettingId[gettingId.length - 2];
                const newSuperPet = {
                    name: superPet.name,
                    number: number
                };
                loadingSuperPet.push(newSuperPet);
            });
        }
        catch (error) {
            throw new common_1.BadRequestException('No se pudo cargar la data de la Api: "https://pokeapi.co/api/v2/pokemon": ', error);
        }
        await this.superPetsModel.deleteMany({});
        const superPet = await this.superPetsModel.insertMany(loadingSuperPet);
        return superPet;
    }
};
exports.SeedService = SeedService;
exports.SeedService = SeedService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(super_pet_entity_1.SuperPet.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        axios_adapter_1.AxiosAdapter])
], SeedService);
//# sourceMappingURL=seed.service.js.map