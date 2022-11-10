const config = require('../configs/config')
const Sequelize = require('sequelize')


const sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, {
    host: config.db.host,
    dialect: 'mysql',
    pool: {
        max: 100,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    dialectOptions: {
        // socketPath: config.db.socketPath
    }
})

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database:', error);
}) 





sequelize.sync();
module.exports = sequelize;