module.exports = app => {
  const EstabilishmentTable = app.db.models.estabilishment;  
  const ENDPOINT = '/estabilishment';
  
  app
    .get(ENDPOINT, (req, res) => {
      EstabilishmentTable.findAll()
                         .then(estabilishment => {
                           res.json({ success: true, estabilishment })
                         });
    })
    .get(`${ENDPOINT}/:id`, (req, res) => {
      const estabilishmentId = req.params.id;

      EstabilishmentTable.findById(estabilishmentId)
                         .then(estabilishment => {
                           res.json({ success: true, estabilishment })
                         });
    })
    .post(ENDPOINT, (req, res) => {
      const data = req.body;

      EstabilishmentTable.create(Object.assign(data))
                         .then(estabilishment => {
                           res.json({ success: true, estabilishment });
                         })
    })
    .patch(`${ENDPOINT}/:id`, (req, res) => {
      const data = req.body;      
      const estabilishmentId = req.params.id;

      EstabilishmentTable.update(
        Object.assign(data),
        {
          where: {
            id: estabilishmentId
          }
        }
      )
      .then(estabilishment => {
        res.json({ success: true, estabilishment });
      });

    })
    .delete(`${ENDPOINT}/:id`, (req, res) => {
      const estabilishmentId = req.params.id;
      
      EstabilishmentTable.destroy(
        {
          where: {
            id: estabilishmentId
          }
        }
      )
      .then(() => {
        res.json({ success: true });
      })        
    });
  
  
  }