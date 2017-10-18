const Sequelize = require('sequelize');

// const Model = ;
// const vacancyModel = 

let db = null;

module.exports = app => {
  if(db) return db;

  const config = app.libs.config;
  const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config.params
  );

  db = {};
  db.models = {};
  
  db.Sequelize = Sequelize;  
  db.sequelize = sequelize;
  db.models.estabilishment = require('./models/estabilishment.js')(sequelize, Sequelize);
  db.models.vacancy = require('./models/vacancy.js')(sequelize, Sequelize);
  
  return db;
}