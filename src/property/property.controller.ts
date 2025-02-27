import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  Param,
  ParseBoolPipe,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { IdParamDto } from './dto/idParam.dto';
import { ParseIdPipe } from './pipes/parseIdPipe';
import { ZodValidationPipe } from './pipes/zodValidationPipe';
import {
  createPropertySchema,
  CreatePropertyZodDto,
} from './dto/createPropertyZod.dto';
import { HeaderPropertyDto } from './dto/headerProperty.dto';
import { RequestHeader } from './pipes/requestHeader';

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
  @UsePipes(new ZodValidationPipe(createPropertySchema))
  create(
    @Body()
    body: CreatePropertyZodDto,
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
    @RequestHeader(
      new ValidationPipe({
        whitelist: true,
        validateCustomDecorators: true,
      }),
    )
    header: HeaderPropertyDto,
  ): string {
    console.log(header.accessToken);
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
