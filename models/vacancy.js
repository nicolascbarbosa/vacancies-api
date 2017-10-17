module.exports = (sequelize, DataType) => {
  const Vacancy = sequelize.define(
    'Vacancy', 
    {
      id: {
        type: DataType.UUIDV4,
        primaryKey: true, 
        defaultValue: DataType.UUIDV4,
        allowNull: false
      },
      estabilishment_id: {
        type: DataType.UUIDV4,
        allowNull: false
      },
      payment_amount: DataType.FLOAT,
      payment_extra: DataType.STRING,
      journey: DataType.STRING,
      active: { 
        type: DataType.ENUM,
        values: ['active', 'inactive']
      },
      vacancy_offers: DataType.STRING,
      vacancy_skills: DataType.STRING,
      job_image: DataType.STRING,
      location: DataType.STRING,
    },
    {
      underscored: true
    }
  );
  return Vacancy;
} 