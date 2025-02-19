// NOTE: IMPORT and use From default dotenv
// import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
// import * as dotenv from 'dotenv';

// dotenv.config(); // Load environment variables from .env file

// export const pgConfig: PostgresConnectionOptions = {
//   url: process.env.PGURL,
//   type: 'postgres',
//   port: 5432, // Default PostgreSQL port
//   entities: [__dirname + '/**/*.entity{ts,js}'],
//   synchronize: true, // set false always in the production
// };

// NOTE: IMPORT and use From ConfigService from nestjs/config
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { ConfigService } from '@nestjs/config';

export const pgConfig = (
  configService: ConfigService,
): PostgresConnectionOptions => ({
  url: configService.get<string>('PGURL'),
  type: 'postgres',
  port: 5432, // Default PostgreSQL port
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true, // set false always in the production
});
