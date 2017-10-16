module.exports = app => {
  app.db.sequelize.sync()
                  .done(() => {
                     app.listen(app.get('port'), function () { 
                      console.log(`Vacancies API listening on port ${app.get('port')}`) 
                    })  
                  }) 
}