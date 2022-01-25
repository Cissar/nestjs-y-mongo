import { Module } from '@nestjs/common';
import { NoticiaController } from './noticia.controller';
import { NoticiaService } from './noticia.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NoticiaSchema } from './schemas/noticia.schema';


@Module({
  imports:[
    MongooseModule.forFeature([
      {name: 'Noticias', schema: NoticiaSchema}
    ])
  ],
  controllers: [NoticiaController],
  providers: [NoticiaService]
})
export class NoticiaModule {}
