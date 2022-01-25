import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Inject } from '@nestjs/common';

import { Noticia } from './interfaces/noticia.interface';
import { NoticiasDTO } from './dto/noticia.dto';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class NoticiaService {

    constructor(@InjectModel('Noticias') private readonly noticiaModel: Model<Noticia>){}

    async getNoticias():Promise<Noticia[ ]> {
        const Noticias = await this.noticiaModel.find();
        return Noticias;
    }
    async getNoticia(productID?:string):Promise<Noticia>{
        const Noticia = await this.noticiaModel.findById(productID);
        return Noticia;
        
    }
    async deleteNoticia(productID:string):Promise<Noticia>{
        const deletedNoticia = await this.noticiaModel.findById(productID);
        return deletedNoticia;
        
    }
}