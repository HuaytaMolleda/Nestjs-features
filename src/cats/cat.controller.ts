import { Controller, Get, Query, Post, Body, Put, Param, Delete, Inject } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cat.service';

@Controller('cats')
export class CatsController {

    constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
        
    let cat = await this.catsService.create(createCatDto);

    console.log(cat);
    return 'The cat was created';
  }

  @Get('getCat/:id')
  async getCat(@Param('id') id:string){

    let cat  = await this.catsService.findCat(id);
    
    return {
      "acknowledgment":"Here ur kitty",
      cat
    }
  }


  @Get('all')
  async findOne() {
    
    let cat  = await this.catsService.findAll();
    return cat;
  }

  
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}