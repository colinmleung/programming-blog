var
  express = require('express'),
  app     = express(),
  poet    = require('poet')( app );

poet
  .createPostRoute()
  .createPageRoute()
  .createTagRoute()
  .createCategoryRoute()
  .init();