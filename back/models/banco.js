'use strict';
module.exports = (sequelize, DataTypes) => {
  const banco = sequelize.define('banco', {
    nome: DataTypes.STRING,
    numero: DataTypes.STRING,
    tipo: DataTypes.STRING
  }, {});
  banco.associate = function(models) {
    // associations can be defined here
  };
  return banco;
};