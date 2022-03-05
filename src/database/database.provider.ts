import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { DynamicModule } from '@nestjs/common';
import { ConnectionIsNotSetError, ConnectionOptions } from 'typeorm';

export const databaseProvider: DynamicModule = TypeOrmModule.forRootAsync({
  inject: [ConfigService],
  async useFactory(config: ConfigService) {
    try {
      const dbConfig = {
        type: config.get('DB_TYPE'),
        host: config.get('DB_HOST'),
        port: config.get('DB_PORT'),
        username: config.get('DB_USER'),
        password: config.get('DB_PASSWORD'),
        database: config.get('DB_NAME'),
        entities: ['dist/**/*.entity{.ts,.js}'],
        synchronize: false,
        retryDelay: 3000,
        retryAttempts: 10,
      } as ConnectionOptions;
      return dbConfig;
    } catch (e) {
      return new ConnectionIsNotSetError(e);
    }
  },
});
