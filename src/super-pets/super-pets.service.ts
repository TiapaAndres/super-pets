import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateSuperPetDto } from './dto/create-super-pet.dto';
import { UpdateSuperPetDto } from './dto/update-super-pet.dto';
import { isValidObjectId, Model } from 'mongoose';
import { SuperPet } from './entities/super-pet.entity';
import { InjectModel } from '@nestjs/mongoose';
import { PaginationDTO } from 'src/common/dtos/pagination.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SuperPetsService {

  constructor(
    @InjectModel(SuperPet.name)
    private readonly superPetsModel: Model<SuperPet>,

    private readonly configService: ConfigService
  ) {
  }

  async create(createSuperPetDto: CreateSuperPetDto) {
    try {
      createSuperPetDto.name = createSuperPetDto.name.toLowerCase();
      const superPet = await this.superPetsModel.create(createSuperPetDto);
      return superPet;
    } catch (error) {
      if (error.code === 11000) {
        throw new BadRequestException(`La super-mascota ya existe en Db: ${JSON.stringify(error.keyValue)}`);
      } else {
        console.log(error);
        throw new BadRequestException('No se pudo crear la mascota: Error desconocido', error);
      }
    }
  }

  async findAllSuperpets(paginationDTO:PaginationDTO) {
    const setLimit = +paginationDTO.limit || this.configService.get<number>('default_limit')
    const superPets = await this.superPetsModel.find()
    .limit(setLimit)
    .skip(paginationDTO.offset)
    .select('-__v');
    console.log('🔰 default_limit: ', setLimit);
    return superPets;
  }

  async findOneSuperpet(findBy: string) {
    let superPet: SuperPet;
    if(isValidObjectId(findBy)){
      superPet = await this.superPetsModel.findById(findBy);
    }
    if(!isNaN(Number(findBy))){
      superPet = await this.superPetsModel.findOne({number: findBy});
    }
    if (!superPet) {
      superPet = await this.superPetsModel.findOne({ name: findBy.toLowerCase() });
    }
    if(!superPet){
      throw new BadRequestException(`La busqueda de super-mascota con '${findBy}' no se encontró o no existe`);
    }
    return superPet;
  }

  async updateSuperPet(updateBy: string, updateSuperPetDto: UpdateSuperPetDto) {
    console.log('updateBy: ', updateBy);
    const updatedSuperPet = await this.findOneSuperpet(updateBy);
    updateSuperPetDto?.name ? updateSuperPetDto.name.toLowerCase() : updateSuperPetDto;
    try {
      await updatedSuperPet.updateOne(updateSuperPetDto);
      return {...updatedSuperPet.toJSON(), ...updateSuperPetDto};
    } catch (error) {
      if (error.code === 11000) {
        throw new BadRequestException(`Ya existe en Db la mascota: "${JSON.stringify(error.keyValue)}"`);
      } else {
        console.log(error);
        throw new BadRequestException('No se pudo actualizar la mascota: Error desconocido', error);
      }
    }
  }

  async remove(deleteBy: string) {
    const deleteSuperPet = await this.superPetsModel.deleteOne({ _id: deleteBy });
    if (deleteSuperPet.deletedCount === 0) {
      throw new BadRequestException(`La super-mascota no existe en Db: ${deleteBy}`);
    }
    return `Deleted SuperPet con id '${JSON.stringify(deleteBy)}'`;
  }
}
