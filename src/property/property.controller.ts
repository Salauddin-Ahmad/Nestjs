import {
  Body,
  Controller,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Query,
  Patch, // Add this import
  ValidationPipe,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
// import { idParamDto } from './dto/idParam.dto';
import { ParsedIdPipe } from './pipes/parsedIdpipes';

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
  // @UsePipes(
  //   new ValidationPipe({
  //     whitelist: true,
  //     forbidNonWhitelisted: true,
  //   }),
  // ) // used directly in the body below
  create(
    @Body(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        groups: ['create'],
      }),
    )
    body: CreatePropertyDto,
  ) {
    return body;
  }
  @Patch(':id')
  update(
    @Param('id', ParsedIdPipe) id,
    @Body()
    body: CreatePropertyDto,
  ) {
    return body;
  }
}
