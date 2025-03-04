"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperPetsModule = void 0;
const common_1 = require("@nestjs/common");
const super_pets_service_1 = require("./super-pets.service");
const super_pets_controller_1 = require("./super-pets.controller");
const mongoose_1 = require("@nestjs/mongoose");
const super_pet_entity_1 = require("./entities/super-pet.entity");
const config_1 = require("@nestjs/config");
let SuperPetsModule = class SuperPetsModule {
};
exports.SuperPetsModule = SuperPetsModule;
exports.SuperPetsModule = SuperPetsModule = __decorate([
    (0, common_1.Module)({
        controllers: [super_pets_controller_1.SuperPetsController],
        providers: [super_pets_service_1.SuperPetsService],
        imports: [
            config_1.ConfigModule,
            mongoose_1.MongooseModule.forFeature([
                {
                    name: super_pet_entity_1.SuperPet.name,
                    schema: super_pet_entity_1.SuperPetSchema
                }
            ])
        ],
        exports: [mongoose_1.MongooseModule]
    })
], SuperPetsModule);
//# sourceMappingURL=super-pets.module.js.map