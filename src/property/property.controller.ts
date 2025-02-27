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
import { PropertyService } from './property.service';

@Controller('properties')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}
  @Get()
  findAll() {
    return this.propertyService.findAll();
  }

  @Get('featured')
  findFeatured() {
    return this.propertyService.findFeatured();
  }

  @Post()
  @UsePipes(new ZodValidationPipe(createPropertySchema))
  create(
    @Body()
    body: CreatePropertyZodDto,
  ) {
    return this.propertyService.create(body);
  }

  @Get(':id')
  findOne(@Param() param: IdParamDto) {
    return this.propertyService.findOne(param);
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
  ) {
    console.log(header.accessToken);
    return this.propertyService.update(id, body, header);
  }

  @Get(':id/owners')
  findOwner(@Param() { id }: IdParamDto, @Query('sort', ParseBoolPipe) sort) {
    console.log(typeof sort);
    return this.propertyService.findOwner(id, sort);
  }

  @Delete(':id')
  remove(@Param('id', ParseIdPipe) id) {
    return this.propertyService.remove(id);
  }
}
