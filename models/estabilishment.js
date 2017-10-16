module.exports = (sequelize, DataType) => {
  const Tasks = sequelize.define(
    'Estabilishment', 
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
      name: DataType.STRING,
      neighbor: DataType.STRING,
      zipcode: DataType.STRING,
      address: DataType.STRING,
      city: DataType.STRING,
      state: DataType.STRING,
      number: DataType.STRING,
      complement:  DataType.STRING
    },
    {
      underscored: true
    }
  );
  return Tasks;
} 