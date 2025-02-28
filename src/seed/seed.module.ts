import { Module } from '@nestjs/common';
import { SeedController } from './seed.controller';
import { SuperPetsModule } from 'src/super-pets/super-pets.module';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { SeedService } from './seed.service';

@Module({
  imports: [SuperPetsModule, MongooseModule],
  controllers: [SeedController],
  providers: [SeedService],
})
export class SeedModule {}
