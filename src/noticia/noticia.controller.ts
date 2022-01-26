import { Controller, Get,Post, Put, Delete, Res, HttpStatus, Body, Param} from '@nestjs/common';
import { NoticiasDTO } from './dto/noticia.dto';
import { NoticiaService } from './noticia.service';

@Controller('noticia')
export class NoticiaController {

    constructor(private noticiaService:NoticiaService){}

    @Get('/')
    async getNoticias(@Res() res) {
        const Noticias = await this.noticiaService.getNoticias();
        return res.status(HttpStatus.OK).json(Noticias);
    }

}
