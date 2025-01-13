/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { Gato } from './interface/gato.interface'; 
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class GatosService {

    constructor( @InjectModel(Gato.name) private gatoModel: Model<Gato>) {
        
    }

    async create(gato:Gato):Promise<Gato> {
        const nuevoGato = new this.gatoModel(gato);
        return nuevoGato.save();
    }

   async findAll():Promise<Gato[]> {
        return this.gatoModel.find().exec();
    }

    async findByName(nombreDelGato:string):Promise<Gato> {
        return this.gatoModel.findOne({nombre:nombreDelGato});
    }

    async eliminarGatoPorId(id:string):Promise<string> {
        if (this.gatoModel.findById(id).exec()!=null) {
            this.gatoModel.findByIdAndDelete(id).exec();
            return "Gato eliminado";
        } else {
            return "No se encontró al gato";
        }
    }
}

