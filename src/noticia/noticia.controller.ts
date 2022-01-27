import { Controller, Get,Post, Put, Delete, Res, HttpStatus, Body, Param, Req} from '@nestjs/common';
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

    @Delete('/')
    async deleteNoticia(@Res() res, @Body() body) {
        const Noticias = await this.noticiaService.deleteNoticia(body._id);
        return res.status(HttpStatus.OK).json(Noticias);
    }

}
