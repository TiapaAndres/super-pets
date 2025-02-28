import { PartialType } from '@nestjs/mapped-types';
import { CreateSuperPetDto } from './create-super-pet.dto';

export class UpdateSuperPetDto extends PartialType(CreateSuperPetDto) {}
