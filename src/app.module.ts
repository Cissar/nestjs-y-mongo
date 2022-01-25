import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NoticiaModule } from './noticia/noticia.module';
import {MongooseModule} from '@nestjs/Mongoose'

@Module({
  imports: [
    NoticiaModule,
    MongooseModule.forRoot('mongodb://localhost/noticiasapi')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
