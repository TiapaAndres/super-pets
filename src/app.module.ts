import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { SuperPetsModule } from './super-pets/super-pets.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SeedModule } from './seed/seed.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public')
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/super-pets'),
    SuperPetsModule,
    SeedModule,
    CommonModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
