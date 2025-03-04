import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { SuperPetsModule } from './super-pets/super-pets.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SeedModule } from './seed/seed.module';
import { CommonModule } from './common/common.module';
import { ConfigModule } from '@nestjs/config';
import { EnvironmentConfigurations } from 'config/env.config';
import { JoiValidationSchema } from 'config/joi.validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvironmentConfigurations],
      validationSchema: JoiValidationSchema,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public')
    }),
    MongooseModule.forRoot(
      process.env.MONGO_DB,
      {
        dbName: 'Your-Pet-Database',
      }
    ),
    SuperPetsModule,
    SeedModule,
    CommonModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
