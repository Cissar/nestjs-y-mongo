import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NoticiaModule } from './noticia/noticia.module';
import {MongooseModule} from '@nestjs/Mongoose';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    NoticiaModule,
    MongooseModule.forRoot('mongodb+srv://cesar:cesar@cluster0.9aauq.mongodb.net/noticiasapi'),
    ScheduleModule.forRoot()

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
