import { Injectable, Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import { Inject } from '@nestjs/common';

import { NoticiasDTO } from './dto/noticia.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Cron, CronExpression } from '@nestjs/schedule';
import { INoticia } from '../../dist/noticia/interfaces/noticia.interface';
import { HttpService } from '@nestjs/axios';


@Injectable()
export class NoticiaService {

    constructor(
        private readonly httpService: HttpService, 
        @InjectModel('Noticias') private readonly noticiaModel: Model<INoticia>,
    ){}


    
    async getNoticias():Promise<INoticia[ ]> {
        const Noticias = await this.noticiaModel.find();
        return Noticias;
    }
    async getNoticia(noticiaID?:string):Promise<INoticia>{
        const Noticia = await this.noticiaModel.findById(noticiaID);
        return Noticia;
        
    }
    async deleteNoticia(noticiaID:string):Promise<INoticia>{
        return await  this.noticiaModel.deleteOne({_id: noticiaID});
    }

    async saveNoticia(noticia: INoticia):Promise<INoticia>{
        try{
            return await new this.noticiaModel(noticia);
        }catch(e) {
            console.log(e);
            throw new Error(e);
        }
    }

    // private readonly logger = new Logger(NoticiaService.name)
    
    @Cron(CronExpression.EVERY_HOUR)
    async cambiaCadahora(){
        this.httpService
          .get('https://hn.algolia.com/api/v1/search_by_date?query=nodejs')
          .subscribe(async (response) => {
            const hits = response.data.hits;

            hits.map( async (element) => {
                if(!element.title && !element.story_title) {
                    return;
                } else {
                    const data = await this.saveNoticia({
                        created_at: 'element.created_at',
                        title: element.title ? element.title : 'Title',
                        author: element.author
                    });
                    data.save();
                }
            })
          });
    }
    

    
}
