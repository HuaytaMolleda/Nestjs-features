import { Injectable, Inject, Param } from '@nestjs/common';
import { Model } from 'mongoose';
import { Owner } from './interfaces/owners.interface';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { AssignCatDto } from './dto/assign-cat.dt';

@Injectable()
export class OwnersService {
    constructor(
        @Inject('OWNER_MODEL')
        private readonly ownerModel: Model<Owner>) { }

    async create(createOwnerDto: CreateOwnerDto): Promise<Owner> {

        let owner = await new this.ownerModel(createOwnerDto);
        console.log(owner);

        owner.save();

        return owner;
    }
    async getAllOwners() : Promise<Owner[]>{

        let allOwners = await this.ownerModel.find().exec();
        console.log(allOwners);
        return allOwners; 
    }
    async getAllOwnersAndKitties() : Promise<Owner>{
        let getAllOwnersAndKitties = await this.ownerModel.findOne().populate('cats');
        console.log(getAllOwnersAndKitties);

        return getAllOwnersAndKitties;
    }
    async getOwner(idOwner: string): Promise<Owner> {

        let owner = await this.ownerModel.findById(idOwner);

        console.log(owner);
        return owner;
    }
    async assignCat(assignCatDto: AssignCatDto): Promise<Owner> {

        let owner = await this.ownerModel.findById(assignCatDto.idOwner);
        console.log("This");
        console.log(owner);

        owner.cats.push(assignCatDto.idCat);

        await owner.save();

        return owner;
    }


    async deleteOwner(idOwner: string): Promise<Owner> {
        let owner = await this.ownerModel.findByIdAndDelete(idOwner);

        console.log(owner);

        return owner;
    }

    async deleteCatFromOwner(assignCatDto: AssignCatDto) {

        let owner = await this.ownerModel.findById(assignCatDto.idOwner);

        let newCats = owner.cats.filter( idCat => idCat != assignCatDto.idCat);
        
        /**Compare arrays length to determinate the filter method*/
        if (owner.cats.length === newCats.length) {

            return {
                "Message": "El gato ingresado no esta registrado con el dueño",
                owner
            };

        } else {

            owner.cats = newCats;

            console.log(owner);

            await owner.save();

            return owner;
        }

    }


}
