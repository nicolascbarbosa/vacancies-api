module.exports = app => {
  const bodyParser = require('body-parser');

  app.set('json spaces', 4);
  app.set('port', process.env.PORT || 3000);  

  app.use(bodyParser.urlencoded({ extended: false }));
}