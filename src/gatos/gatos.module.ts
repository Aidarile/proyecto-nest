import { Module } from '@nestjs/common';
import { GatosController } from './gatos.controller';
import { GatosService } from './gatos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Gato, GatoSchema } from './schemas/gato.schema';

@Module({
  imports: [MongooseModule.forFeature(
    [
    {name: Gato.name, schema: GatoSchema}
    ]
)
],
  controllers: [GatosController],
  providers: [GatosService]
})
export class GatosModule {}
