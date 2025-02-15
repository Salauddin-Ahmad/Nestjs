import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('property')
export class PropertyController {
  @Get()
  findAll() {
    return 'All properties';
  }
  @Get(':id/:slug')
  findOne(@Param('id') id, @Param('slug') slug) {
    return `${this.constructor.name} ${id} ${slug}`;
  }
  @Post()
  create(@Body('name') names: string | number) {
    return names;
  }
}
