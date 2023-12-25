var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreScheme = new Schema({
    name: { type: String, required: true, min: 3, max: 100 },
});

GenreScheme.virtual('url').get(() => '/catalog/genre/' + this._id);

module.exports = mongoose.model("Genre", GenreScheme);