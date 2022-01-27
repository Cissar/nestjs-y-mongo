import { Schema } from "mongoose";

export const NoticiaSchema = new Schema({
    created_at: String,
    title: String,
    author: String,
});