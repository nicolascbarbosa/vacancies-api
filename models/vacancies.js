module.exports = (sequelize, DataType) => {
  const Tasks = sequelize.define(
    'Vacancies', 
    {
      id: {
        type: DataType.UUID,
        primaryKey: true, 
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
      },
      created_at: {
        type: DataType.DATE,
        allowNull: false
      },
      updated_at: DataType.DATE,
      payment_amount: DataType.FLOAT,
      payment_extra: DataType.STRING,
      journey: DataType.STRING,
      active: { 
        type: DataType.ENUM,
        values: ['active', 'inactive']
      },
      vacancy_offers: DataType.ARRAY,
      vacancy_skills: DataType.ARRAY,
      job_image: DataType.STRING,
      location: DataType.STRING,
    },
    {
      underscored: true
    }
  );
  return Tasks;
} 