// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { PropertyModule } from './property/property.module';
// import { TypeOrmModule } from '@nestjs/typeorm';
// // import { pgConfig } from 'dbConfig';
// import { ConfigModule } from '@nestjs/config';
// import { dbConfig } from 'dbConfig';

// @Module({
//   imports: [
//     ConfigModule.forRoot({
//       isGlobal: true, // Makes env variables accessible throughout the app
//     }),
//     TypeOrmModule.forRoot(dbConfig), // Uses TypeORM configuration
//     PropertyModule,
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertyModule } from './property/property.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { pgConfig } from 'dbConfig';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes env variables accessible throughout the app
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: pgConfig,
    }),
    PropertyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
