const express = require('express');
const users = require('../routes/users');
const auth = require('../routes/auth');
const favorite = require('../routes/favorite');
const like = require('../routes/like');
const comment = require('../routes/comment');
const error = require('../middleware/error');
const allowAccess = require('./allowAccess');

module.exports = function(app) {
  app.use(express.json());
  app.use(allowAccess);
  app.use('/api/users', users);
  app.use('/api/auth', auth);
  app.use('/api/favorite', favorite);
  app.use('/api/like', like);
  app.use('/api/comment', comment);
  app.use(error);
}