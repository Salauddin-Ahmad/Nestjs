import {
  Body,
  Controller,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';

@Controller('property')
export class PropertyController {
  @Get()
  findAll() {
    return 'All properties';
  }
  @Get(':id/:slug')
  findOne(
    @Param('id', ParseIntPipe) id,
    @Param('slug') slug,
    @Query('sort', ParseBoolPipe) sort,
  ) {
    // console.log(typeof id); //number
    console.log(typeof sort); //boolean
    return `${this.constructor.name} ${id} ${slug}`;
  }
  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() body: CreatePropertyDto) {
    return body;
  }
}
