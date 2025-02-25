import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { IdParamDto } from './dto/id-param.dto';
import { ParseIdPipe } from './pipes/parse-id-pipe';

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
  create(
    @Body()
    body: CreatePropertyDto,
  ): string {
    return JSON.stringify(body);
  }

  @Get(':id')
  findOne(@Param() param: IdParamDto): string {
    return `This action returns a property of id: ${param.id}`;
  }

  @Patch(':id')
  update(
    @Param() { id }: IdParamDto,
    @Body()
    body: CreatePropertyDto,
  ): string {
    return `This action updates a property of id: ${id} with data: ${JSON.stringify(body)}`;
  }

  @Get(':id/owners')
  findOwner(
    @Param() { id }: IdParamDto,
    @Query('sort', ParseBoolPipe) sort,
  ): string {
    console.log(typeof sort);
    return `This action returns the owners of the property of id: ${id}`;
  }

  @Delete(':id')
  remove(@Param('id', ParseIdPipe) id): string {
    return `This action removes a property of id: ${id}`;
  }
}
