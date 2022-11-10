const {Model, DataTypes} = require('sequelize')
const sequelize = require('./sequelize')

const todo = sequelize.define('todo', {
    id : {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, unique: true
    },
    details : {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'active',
    }
}, {
    tableName: 'todo'
})

module.exports = todo;
