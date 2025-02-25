import { Module } from '@nestjs/common';
import { PropertyController } from './property.controller';

@Module({
  imports: [],
  controllers: [PropertyController],
  providers: [],
})
export class PropertyModule {}
