var mongoose = require('mongoose');

const Schema = mongoose.Schema;
//Define a schema
const delaniSchema = new Schema({
    'name': String,
    'email': String,
    'description': String
})
// Create a model from the schema
const Delani = mongoose.model('delani', delaniSchema);

// Export it
module.exports = Delani;