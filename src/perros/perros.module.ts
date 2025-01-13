
import { Module } from '@nestjs/common';
import { PerrosService } from './perros.service';
import { PerrosController } from './perros.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Perro, PerroSchema } from './schemas/perro.schemas';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        { name: Perro.name, schema: PerroSchema}
      ]
    )
  ],
  controllers: [PerrosController],
  providers: [PerrosService],
})
export class PerrosModule {}
