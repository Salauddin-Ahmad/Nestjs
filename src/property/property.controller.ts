import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Query,
  Body,
  ValidationPipe,
  ParseIntPipe,
  ParseBoolPipe,
  UsePipes,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
import {
  createPropertySchema,
  CreatePropertyZodDto,
} from './dto/createPropertyZod.dto';
import { ZodValidationPipe } from './pipes/zodValidationPipe';

@Controller('property')
export class PropertyController {
  @Get()
  findAll() {
    return 'All properties';
  }

  @Get(':id/:slug')
  findOne(
    @Param('id', ParseIntPipe) id: number,
    @Param('slug') slug: string,
    @Query('sort', ParseBoolPipe) sort: boolean,
  ) {
    // console.log(typeof id); //number
    console.log(typeof sort); //boolean
    return `${this.constructor.name} ${id} ${slug}`;
  }

  @Post()
  @UsePipes(new ZodValidationPipe(createPropertySchema))
  create(
    @Body()
    body: CreatePropertyZodDto,
  ) {
    return body;
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        groups: ['update'],
      }),
    )
    body: CreatePropertyDto,
  ) {
    // Add your update logic here
    return body;
  }
}
