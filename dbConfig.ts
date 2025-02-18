import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const pgConfig: PostgresConnectionOptions = {
  url: process.env.PGURL,
  type: 'postgres',
  port: 3306,
  entities: [__dirname + '/**/*.entity{ts,js}'],
  synchronize: true, // set false always in the production
};
