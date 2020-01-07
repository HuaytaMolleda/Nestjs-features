import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { OwnersService } from './owners.service';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { AssignCatDto } from './dto/assign-cat.dt';

@Controller('owners')
export class OwnersController {
    
    constructor(private readonly ownerService:OwnersService){
    }

    @Get('getOwner/:id')
    async getOwner(@Param('id') id:string ){
        
        let owner = await this.ownerService.getOwner(id);
        console.log(owner);
        return owner;
    }
    
    @Post('create')
    async createOwner(@Body() createOwnerDto: CreateOwnerDto){
        let owner = await this.ownerService.create(createOwnerDto);

        return owner;
    }


    @Post('assign')
    async assignCat(@Body() assigncatDto: AssignCatDto){
        
        let owner = await this.ownerService.assignCat(assigncatDto);
        console.log(owner);
        return owner;

    }


    @Delete('delete/:id')
    async deleteOwner(@Param('id') id :string){

        let owner = await this.ownerService.deleteOwner(id);

        return {"message":"Owner with #${id} Deleted",owner};

    }


    @Post('delete_cat')
    async deleteCatFromOwner(@Body() assignCat: AssignCatDto){

        let owner = await this.ownerService.deleteCatFromOwner(assignCat);
        
        return owner;
    }

    
    @Get('allOwners')
    async getAllOwners (){
        let owners = await this.ownerService.getAllOwners()
        return owners;
    }

    @Get('ownerKaty')
    async getOwnerAndKitty(){
        return await this.ownerService.getAllOwnersAndKitties();
    }
    

}
