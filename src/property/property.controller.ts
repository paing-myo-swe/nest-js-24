import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('properties')
export class PropertyController {
  @Get()
  findAll(): string {
    return 'This action returns all properties';
  }

  @Get('featured')
  findFeatured(): string {
    return 'This action returns all featured properties';
  }

  @Post()
  create(@Body() inputedPropertyData): string {
    return JSON.stringify(inputedPropertyData);
  }

  @Get(':id')
  findOne(@Param('id') id): string {
    return `This action returns a property of id: ${id}`;
  }

  @Patch(':id')
  update(@Param('id') id, @Body() inputedPropertyData): string {
    return `This action updates a property of id: ${id} with data: ${JSON.stringify(inputedPropertyData)}`;
  }

  @Get(':id/owners')
  findOwner(@Param('id') id): string {
    return `This action returns the owners of the property of id: ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id): string {
    return `This action removes a property of id: ${id}`;
  }
}
