import { Schema } from "mongoose";

export const NoticiaSchema = new Schema({
    created_at: Date,
    title: String,
    url: String,
    author: String,
    points: Number,
    story_text: String,
    comment_text: String,
});