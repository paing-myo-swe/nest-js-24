import { Injectable } from '@nestjs/common';

@Injectable()
export class PropertyService {
  async findAll() {
    return 'This action returns all properties';
  }
  async findFeatured() {
    return 'This action returns all featured properties';
  }
  async create(body: any) {
    return JSON.stringify(body);
  }
  async findOne(param: any) {
    return `This action returns a property of id: ${param.id}`;
  }
  async update(id: any, body: any, header: any) {
    return `This action updates a #${id} property`;
  }
  async remove(id: any) {
    return `This action removes a #${id} property`;
  }
  async findOwner(id: any, sort: any) {
    return `This action returns the owners of the property of id: ${id}`;
  }
}
