import mongoose from 'mongoose'

const Schema = mongoose.Schema;
const model = mongoose.model;

const bookSchema = new Schema({
    name: { type: String, required: true },
    author:{ type: String, required: true },
    created: { type: Date, default: Date.now },
    finished: Date
});

const Book = model('Book', bookSchema);

export default Book;