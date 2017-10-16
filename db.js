const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

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

  db = {
    sequelize, 
    Sequelize, 
    models: {}
  };

  return db;
}