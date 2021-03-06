"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Job.belongsToMany(models.Applicant, {
        through: models.Apply,
        foreignKey: "jobId",
      });
      Job.belongsToMany(models.Company, {
        through: models.Report,
        foreignKey: "jobId",
      });
    }
  }
  Job.init(
    {
      tittle: DataTypes.STRING,
      requirement: DataTypes.TEXT,
      jobDescription: DataTypes.TEXT,
      salary: DataTypes.INTEGER,
      isActive: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Job",
    }
  );
  return Job;
};
