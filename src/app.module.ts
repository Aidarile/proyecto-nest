/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GatosModule } from './gatos/gatos.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    GatosModule,
    MongooseModule.forRoot("mongodb://localhost/gatos")
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
