import { Injectable } from '@nestjs/common';
import { Gato } from './interface/gato.interface'; 

@Injectable()
export class GatosService {

    private readonly gatos : Gato[] = [];

    constructor() {
        const g1: Gato = new Gato();
        g1.nombre = "Gardfield";
        g1.edad = 40;
        g1.color = "naranja";
        this.gatos.push(g1);

        const g2: Gato = new Gato();
        g2.nombre = "Felix";
        g2.edad = 52;
        g2.color = "negro";
        this.gatos.push(g2);

        const g3: Gato = new Gato();
        g3.nombre = "Doraemon";
        g3.edad = 30;
        g3.color = "azul";
        this.gatos.push(g3);

    }

    create(gato:Gato) {
        this.gatos.push(gato);
    }

    findAll():Gato[] {
        return this.gatos;
    }

    findByName(nombre:string):Gato {
        return this.gatos.find(g=> g.nombre == nombre);
        }
    }

