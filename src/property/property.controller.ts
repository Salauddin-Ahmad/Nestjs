import { RequestHeader } from './pipes/request-header';
import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Query,
  Body,
  ParseIntPipe,
  ParseBoolPipe,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
import {
  createPropertySchema,
  CreatePropertyZodDto,
} from './dto/createPropertyZod.dto';
import { ZodValidationPipe } from './pipes/zodValidationPipe';
import { HeadersDto } from './dto/headers.dto';
import { PropertyService } from './property.service';

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
  async create(@Body() dto: CreatePropertyZodDto) {
    console.log('Received DTO:', dto); // Debugging
    return this.propertyService.create(dto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    body: CreatePropertyDto,
    @RequestHeader(
      new ValidationPipe({
        whitelist: true,
        validateCustomDecorators: true,
      }),
    )
    header: HeadersDto,
  ) {
    // Add your update logic here
    return this.propertyService.update();
  }
}
