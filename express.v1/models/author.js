var mongoose = require('mongoose');
const { DateTime } = require('luxon');

var Schema = mongoose.Schema;

// Define AuthorSchema
var AuthorSchema = new Schema({
    first_name: { type: String, required: true, max: 100 },
    last_name: { type: String, required: true, max: 100 },
    date_of_birth: { type: Date },
});

// Virtual for author's full name
AuthorSchema.virtual('name').get(function() { 
    return `${this.first_name} ${this.last_name}`; 
});
AuthorSchema.virtual('date_of_birth_formatted').get(function() { 
    return this.date_of_birth? DateTime.fromJSDate(this.date_of_birth).toLocaleString(DateTime.DATE_MED) : ''; 
});
AuthorSchema.virtual('url').get(function() { 
    return '/catalog/author/' + this._id; 
});

module.exports = mongoose.model("Author", AuthorSchema);