import { Controller, Delete, Get, Param } from '@nestjs/common';
import { GatosService } from './gatos.service';
import { Gato } from './interface/gato.interface';

@Controller('gatos')
export class GatosController {
    
    constructor(private servicioDeGatos: GatosService) {}

    @Get()
    ListarTodosLosGatos(): Gato[] {
        return this.servicioDeGatos.findAll();
    }

    @Get("/:nombre")
    BurcarUnGato( @Param("nombre") nombreDelGato: any ): Gato {
        return this.servicioDeGatos.findByName(nombreDelGato);
    }

    @Delete("/:id")
    EliminarListadoGatos( @Param("id") id:any): string {
        return "Eliminar el gato..." + id;
    }
}
