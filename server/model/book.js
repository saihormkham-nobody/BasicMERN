const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    name: { type: String, required: true },
    author:{ type: String, required: true },
    created: { type: Date, default: Date.now },
    finished: Date
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;