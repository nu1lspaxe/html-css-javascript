var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// type: Schema.Types.ObjectId + ref: "SchemaName" => type can be understood as foreign key, reference from "SchemaName"
// note: genre is [] because it will has multiple values
var BookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "Author", required: true },
    summary: { type: String, required: true },
    isbn: { type: String, required: true },
    genre: [{type: Schema.Types.ObjectId, ref: "Genre"}]
})

// Virtual for book's url
// this._id => MongoDB creates a unique index on the _id field during the creation of a collection.
BookSchema.virtual('url').get(function() {
    return '/catalog/book/' + this._id;
});

module.exports = mongoose.model("Book", BookSchema);