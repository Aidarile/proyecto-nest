/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GatosModule } from './gatos/gatos.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PerrosModule } from './perros/perros.module';

@Module({
  imports: [
    GatosModule,
    MongooseModule.forRoot("mongodb://localhost/gatos"),
    PerrosModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
