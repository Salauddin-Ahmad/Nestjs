import { ParsedIdPipe } from './pipes/parsedIdpipes';
// import { RequestHeader } from './pipes/request-header';
// import { CreatePropertyDto } from './dto/createProperty.dto';
import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  // Query,
  // ParseBoolPipe,
  // ValidationPipe,
  Body,
  ParseIntPipe,
  UsePipes,
  Delete,
} from '@nestjs/common';
import {
  createPropertySchema,
  CreatePropertyZodDto,
} from './dto/createPropertyZod.dto';
import { ZodValidationPipe } from './pipes/zodValidationPipe';
import { PropertyService } from './property.service';
import { UpdatePropertyDto } from './dto/updateProperty.dto';

@Controller('property')
export class PropertyController {
  constructor(private propertyService: PropertyService) {
    // this.propertyService = propertyService;
  }

  @Get()
  findAll() {
    return this.propertyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.propertyService.findOne(id);
  }

  @Post()
  @UsePipes(new ZodValidationPipe(createPropertySchema))
  create(@Body() dto: CreatePropertyZodDto) {
    console.log('Received DTO:', dto); // Debugging
    return this.propertyService.create(dto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    body: UpdatePropertyDto,
  ) {
    return this.propertyService.update(id, body);
  }
  @Delete(':id')
  delete(@Param('id', ParsedIdPipe) id: number) {
    return this.propertyService.delete(id);
  }
}
