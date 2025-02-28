import { BadRequestException, Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { SuperPetAxios } from './interfaces/super-pets.interface';
import { InjectModel } from '@nestjs/mongoose';
import { SuperPet  } from 'src/super-pets/entities/super-pet.entity';
import { Model } from 'mongoose';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { AxiosAdapter } from 'src/common/http-adapter/axios.adapter';



@Injectable()
export class SeedService {
  
  constructor(
    @InjectModel(SuperPet.name)
    private readonly superPetsModel: Model<SuperPet>,

    private readonly axiosAdapter: AxiosAdapter,
  ) {}

  private readonly axios: AxiosInstance = axios;

  async findAll() {
    let loadingSuperPet = [];
    try {
      const data = await this.axiosAdapter.get<SuperPetAxios>('https://pokeapi.co/api/v2/pokemon?limit=650');
      data.results.forEach((superPet) => {
        const gettingId = superPet.url.split('/');
        const number = gettingId[gettingId.length - 2];
        const newSuperPet = {
          name: superPet.name,
          number: number
        }
        loadingSuperPet.push(newSuperPet);
      });
      
    } catch (error) {
      throw new BadRequestException('No se pudo cargar la data de la Api: "https://pokeapi.co/api/v2/pokemon": ', error);
      
    }
    await this.superPetsModel.deleteMany({});
    const superPet = await this.superPetsModel.insertMany(loadingSuperPet);
    return superPet;
  }
}
