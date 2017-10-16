module.exports = app => {
  app.get('/', (req, res) => res.json({status: "Vacancies API OK"}));  
};