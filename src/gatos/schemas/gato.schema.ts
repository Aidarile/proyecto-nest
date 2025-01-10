import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Gato {
    @Prop( {required: true} )
    nombre: string

    @Prop(  )
    edad: number

    @Prop() 
    color: string
}

export const GatoSchema = SchemaFactory.createForClass(Gato);