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
import { UpdatePropertyDto } from './dto/updateProperty.dto';
import { PaginationDto } from './dto/pagination.dto';

@Controller('properties')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}
  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.propertyService.findAll(paginationDto);
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
    body: UpdatePropertyDto,
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

  @Delete(':id')
  remove(@Param('id', ParseIdPipe) id) {
    return this.propertyService.remove(id);
  }
}
