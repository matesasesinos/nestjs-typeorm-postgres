import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestdbEntity } from './entities/testdb.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TestdbEntity])],
})
export class TestdbModule {}
