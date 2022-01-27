import { Module } from '@nestjs/common';
import { NoticiaController } from './noticia.controller';
import { NoticiaService } from './noticia.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NoticiaSchema } from './schemas/noticia.schema';
import { HttpModule } from '@nestjs/axios';


@Module({
  imports:[
    HttpModule,
    MongooseModule.forFeature([
      {name: 'Noticias', schema: NoticiaSchema}
    ])
  ],
  controllers: [NoticiaController],
  providers: [NoticiaService]
})
export class NoticiaModule {}
