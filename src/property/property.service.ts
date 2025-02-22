import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Property } from 'src/entities/property.entity';
import { Repository } from 'typeorm';
import { CreatePropertyDto } from './dto/createProperty.dto';

@Injectable()
export class PropertyService {
  constructor(
    @InjectRepository(Property) private propertyRepo: Repository<Property>,
  ) {}
  async findAll() {}
  async findOne(id: number) {
    return await this.propertyRepo.findOne({
      where: { id },
    });
  }
  async create(dto: CreatePropertyDto) {
    try {
      const property = this.propertyRepo.create(dto);
      return await this.propertyRepo.save(property);
    } catch (error) {
      console.error('Error creating property:', error);
      throw new InternalServerErrorException('Failed to create property');
    }
  }
  async update() {}
}
