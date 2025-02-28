import { Module } from '@nestjs/common';
import { SeedController } from './seed.controller';
import { SuperPetsModule } from 'src/super-pets/super-pets.module';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { SeedService } from './seed.service';
import { AxiosAdapter } from 'src/common/http-adapter/axios.adapter';
import { CommonModule } from 'src/common/common.module';

@Module({
  imports: [SuperPetsModule, MongooseModule, CommonModule],
  controllers: [SeedController],
  providers: [SeedService],
})
export class SeedModule {}
