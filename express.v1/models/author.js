var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// define AuthorScehma
var AuthorScehma = new Schema({
    first_name: { type: String, required: true, max: 100 },
    last_name: { type: String, required: true, max: 100 },
    date_of_birth: { type: Date },
});

// virtual for author's full name
AuthorScehma.virtual('name').get(() => this.first_name + ", " + this.last_name);
AuthorScehma.virtual('url').get(() => '/catalog/author/' + this._id);

module.exports = mongoose.model("Author", AuthorScehma);