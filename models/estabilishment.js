module.exports = (sequelize, DataType) => {
  const Estabilishment = sequelize.define(
    'Estabilishment', 
    {
      id: {
        type: DataType.UUIDV4,
        primaryKey: true, 
        defaultValue: DataType.UUIDV4,
        allowNull: false
      },
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
  return Estabilishment;
} 