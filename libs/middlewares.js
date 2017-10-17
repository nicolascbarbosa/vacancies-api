module.exports = app => {
  const bodyParser = require('body-parser');

  app.set('json spaces', 4);
  app.set('port', process.env.PORT || 3000);  

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.text());
  app.use(bodyParser.json({ type: 'application/json' }))
}