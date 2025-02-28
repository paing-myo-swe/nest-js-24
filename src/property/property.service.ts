import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Property } from 'src/entities/property.entity';
import { Repository } from 'typeorm';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { IdParamDto } from './dto/idParam.dto';
import { UpdatePropertyDto } from './dto/updateProperty.dto';

@Injectable()
export class PropertyService {
  constructor(
    @InjectRepository(Property) private propertyRepo: Repository<Property>,
  ) {}

  async findAll() {
    return await this.propertyRepo.find();
  }

  async create(data: CreatePropertyDto) {
    const property = await this.propertyRepo.save(data);
    return property;
  }

  async findOne(param: IdParamDto) {
    const data = await this.propertyRepo.findOne({ where: { id: param.id } });
    if (!data) throw new NotFoundException('Property not found');
    return data;
  }

  async update(id: number, data: UpdatePropertyDto, header: any) {
    const isAffected = await this.propertyRepo.update(id, data);
    if (!isAffected.affected) throw new NotFoundException('Property not found');
    return await this.propertyRepo.findOne({ where: { id } });
  }

  async remove(id: number) {
    const isDeleted = await this.propertyRepo.delete(id);
    if (!isDeleted.affected) throw new NotFoundException('Property not found');
    return 'Property deleted successfully';
  }
}
