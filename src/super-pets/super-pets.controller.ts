import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { SuperPetsService } from './super-pets.service';
import { CreateSuperPetDto } from './dto/create-super-pet.dto';
import { UpdateSuperPetDto } from './dto/update-super-pet.dto';
import { ParseMongoIdPipe } from './pipes/parse-mongo-id/parse-mongo-id.pipe';
import { PaginationDTO } from 'src/common/dtos/pagination.dto';

@Controller('super-pets')
export class SuperPetsController {
  constructor(private readonly superPetsService: SuperPetsService) {}

  @Post()
  create(
    @Body() createSuperPetDto: CreateSuperPetDto
  ) {
    return this.superPetsService.create(createSuperPetDto);
  }

  @Get()
  findAll(
    @Query() paginationDTO: PaginationDTO
  ) {
    return this.superPetsService.findAllSuperpets(paginationDTO);
  }

  @Get(':findBy')
  findOne(
    @Param('findBy') findBy: string
  ) {
    return this.superPetsService.findOneSuperpet(findBy);
  }

  @Patch(':updateBy')
  update(
    @Param('updateBy') updateBy: string,
    @Body() updateSuperPetDto: UpdateSuperPetDto
  ) {
    return this.superPetsService.updateSuperPet(updateBy, updateSuperPetDto);
  }

  @Delete(':deleteBy')
  remove(
    @Param('deleteBy', ParseMongoIdPipe) deleteBy: string
  ) {
    return this.superPetsService.remove(deleteBy);
  }
}
