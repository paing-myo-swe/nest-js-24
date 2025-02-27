import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const dbConfig: PostgresConnectionOptions = {
  url: 'postgres://postgres@localhost:5432/nestjs_property',
  type: 'postgres',
  port: 5432,
  synchronize: true, // set to false in production
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
};
