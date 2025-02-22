import {
  Delete,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Property } from 'src/entities/property.entity';
import { Repository } from 'typeorm';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { UpdatePropertyDto } from './dto/updateProperty.dto';

@Injectable()
export class PropertyService {
  constructor(
    @InjectRepository(Property) private propertyRepo: Repository<Property>,
  ) {}
  async findAll() {}
  async findOne(id: number) {
    const property = await this.propertyRepo.findOne({
      where: { id },
    });
    if (!Property) {
      throw new NotFoundException('Property not found');
    }
    return property;
  }
  // async create(dto: CreatePropertyDto) {
  //   // Best practice: Convert the plain DTO into a Property entity instance.
  //   // This ensures that all entity defaults, validations, and lifecycle hooks are applied.
  //   const property = this.propertyRepo.create(dto);
  //   return await this.propertyRepo.save(property);
  // }
  async create(dto: CreatePropertyDto) {
    console.log('DTO before create:', dto);

    // Convert DTO to an entity instance
    const property = this.propertyRepo.create(dto);
    console.log('Entity after create:', property);

    // Save and check the final stored entity
    const savedProperty = await this.propertyRepo.save(property);
    console.log('Saved Property:', savedProperty);

    return savedProperty;
  }

  async update(id: number, dto: UpdatePropertyDto) {
    return await this.propertyRepo.update({ id }, dto);
  }
  async delete(id: number) {
    return await this.propertyRepo.delete({ id });
  }
}
