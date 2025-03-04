"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSuperPetDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_super_pet_dto_1 = require("./create-super-pet.dto");
class UpdateSuperPetDto extends (0, mapped_types_1.PartialType)(create_super_pet_dto_1.CreateSuperPetDto) {
}
exports.UpdateSuperPetDto = UpdateSuperPetDto;
//# sourceMappingURL=update-super-pet.dto.js.map