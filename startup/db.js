const winston = require('winston');
const mongoose = require('mongoose');

module.exports = function() {
  mongoose.connect('mongodb://localhost/moviedb',{useNewUrlParser:true},{useUnifiedTopology: true}).then(() => winston.info('Connected to MongoDB...'));
  
  mongoose.set("useFindAndModify", false);
  mongoose.set("useCreateIndex", true);
}