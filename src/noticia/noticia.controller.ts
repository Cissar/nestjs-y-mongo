import { Controller, Get,Post, Put, Delete, Res, HttpStatus, Body, Param} from '@nestjs/common';
import { NoticiasDTO } from './dto/noticia.dto';
import { NoticiaService } from './noticia.service';

@Controller('noticia')
export class NoticiaController {

    constructor(private noticiaService:NoticiaService){}

    @Post('/create')
        createPost(@Res() res, @Body() noticiaDTO: NoticiasDTO) {
         return res.status(HttpStatus.OK).json({
                message: 'recibido'
        });
    }



}
