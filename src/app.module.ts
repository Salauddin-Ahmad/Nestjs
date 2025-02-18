import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertyModule } from './property/property.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { pgConfig } from 'dbConfig';
import { ConfigModule } from '@nestjs/config';

// @Module({
//   imports: [PropertyModule, TypeOrmModule.forRoot(pgConfig)],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes env variables accessible throughout the app
    }),
    TypeOrmModule.forRoot(pgConfig), // Uses TypeORM configuration
    PropertyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
