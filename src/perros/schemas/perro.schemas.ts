import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Perro {

     @Prop( {required: true} )
    nombre: string;

    @Prop(  )
    raza: string;

    @Prop(  )
    edad: number;
}

export const PerroSchema = SchemaFactory.createForClass(Perro);