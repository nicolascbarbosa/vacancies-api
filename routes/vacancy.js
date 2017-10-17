module.exports = app => { 
  const VacancyTable = app.db.models.vacancy;
  const ENDPOINT = '/vacancy';

  app
    .get(ENDPOINT, (req, res) => {
      VacancyTable.findAll()
                  .then(vacancies => {
                    res.json(vacancies)
                  });
    })
    .get(`${ENDPOINT}/:id`, (req, res) => {
      const vacancyId = req.params.id;
      
      VacancyTable.findById(vacancyId)
                  .then(vacancies => {
                    res.json(vacancies)
                  });
    })
    .post(ENDPOINT, (req, res) => {
      const data = req.body;

      VacancyTable.create(Object.assign(data))
      .then(vacancy => {
        res.json({ success: true, vacancy });
      })
    })
    .patch(`${ENDPOINT}/:id`, (req, res) => {
      const data = req.body;      
      const vacancyId = req.params.id;

      VacancyTable.update(
        Object.assign(data),
        {
          where: {
            id: vacancyId
          }
        }
      )
      .then(vacancy => {
        res.json({ success: true, vacancy });
      })     
    })
    .delete(`${ENDPOINT}/:id`, (req, res) => {
      const vacancyId = req.params.id;

      VacancyTable.destroy(
        {
          where: {
            id: vacancyId
          }
        }
      )
      .then(() => {
        res.json({ success: true });
      })
    });
}