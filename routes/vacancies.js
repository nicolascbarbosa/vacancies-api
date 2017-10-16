module.exports = app => {

  const ENDPOINT = '/vacancies';
  const Vacancies = app.db.models.vacancies;

  app.get(ENDPOINT, (req, res) => {
    res.send('GET');
    // Vacancies.findAll({})
    //      .then(vacancies => {
    //       res.json({vacancies: vacancies});
    //      })
  });


  app.post(ENDPOINT, (req, res) => {
    console.log(req.body);
    res.send('POST');      
  });

  app.patch(ENDPOINT, (req, res) => {
    res.send('PATCH');        
  });

  app.delete(ENDPOINT, (req, res) => {
    res.send('DELETE');            
  });


}