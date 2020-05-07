import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '',
  database: 'taskmanagement',
  entities: ['dist/**/*.entity.js'],
  synchronize: true,
};

//[__dirname + '/../../**/*.entity.{ts,js}'],
