import { Document } from "mongoose";

export interface Noticia extends Document{
    readonly created_at: Date;
    readonly title: string;
    readonly url: string;
    readonly author: string;
    readonly points: number;
    readonly story_text:string;
    readonly comment_text: string;
}