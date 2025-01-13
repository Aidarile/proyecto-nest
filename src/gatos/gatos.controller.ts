import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { GatosService } from './gatos.service';
import { Gato } from './interface/gato.interface';
import { crearGatoDto } from './dtos/crearGato.dto';

@Controller('gatos')
export class GatosController {
    
    constructor(private servicioDeGatos: GatosService) {}

    @Get()
    async ListarTodosLosGatos():Promise <Gato[]> {
        return this.servicioDeGatos.findAll();
    }

    @Get("/:nombre")
    BurcarUnGato( @Param("nombre") nombreDelGato: any ):Promise<Gato> {
        return this.servicioDeGatos.findByName(nombreDelGato);
    }

    @Delete("/:id")
    EliminarGato( @Param("id") id:any):Promise<string> {
        return this.servicioDeGatos.eliminarGatoPorId(id);
        
    }

    @Post()
    InsertarUnNuevoGato( @Body() nuevoGato: crearGatoDto):Promise<Gato> {
        return this.servicioDeGatos.create(nuevoGato);
    }
}
