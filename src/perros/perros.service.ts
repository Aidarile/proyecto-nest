/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreatePerroDto } from './dto/create-perro.dto';
import { UpdatePerroDto } from './dto/update-perro.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Perro } from './schemas/perro.schemas';
import { Model } from 'mongoose';

@Injectable()
export class PerrosService {
  constructor( @InjectModel(Perro.name) private perroModel: Model<Perro>) {}
  
  async create(createPerroDto: Perro):Promise<Perro> {
    const nuevoPerro = new this.perroModel(createPerroDto);
    return nuevoPerro.save();
  }

  async findAll():Promise<Perro[]> {
    return this.perroModel.find().exec();
  }

  async findOne(id: string):Promise<Perro> {
    return this.perroModel.findById(id);
  }

  async update(id: string, updatePerroDto: UpdatePerroDto):Promise<Perro> {
    return this.perroModel.findByIdAndDelete(id, updatePerroDto).exec();
  }

  async remove(id: string) {
    return this.perroModel.findByIdAndDelete(id).exec();
  }
}
