const {Sequelize} = require('sequelize')

const url = 'postgres://tnalnosv:vl4yHJ9ege9OGRWfH0vCH_v59Ax4C4Lk@berry.db.elephantsql.com/tnalnosv'
const sequelize = new Sequelize(url,{
    host : 'localhost',
    dialect:'postgres'
})
async function syncDatabase() {
    try {
      await sequelize.authenticate();
      console.log('Connection to the database has been established successfully.');
      await sequelize.sync({ alter: true }); // This will synchronize the models with the database
      console.log('Models have been synchronized with the database.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
  
syncDatabase();
module.exports = sequelize