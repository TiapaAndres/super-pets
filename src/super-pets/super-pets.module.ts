import { Module } from '@nestjs/common';
import { SuperPetsService } from './super-pets.service';
import { SuperPetsController } from './super-pets.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SuperPet, SuperPetSchema } from './entities/super-pet.entity';

@Module({
  controllers: [SuperPetsController],
  providers: [SuperPetsService],
  imports: [
    MongooseModule.forFeature([
      {
        name: SuperPet.name,
        schema: SuperPetSchema
      }
    ])
  ],
  exports: [MongooseModule]
})
export class SuperPetsModule {}
