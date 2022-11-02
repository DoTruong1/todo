const database = require('../configs/database')
const getAllTodoList = async(req, res) => {
    const [rows, fields] = await database.pool.execute('SELECT ID, jobName, completed, createdAt, deleteAt FROM todo.history;')

    return res.json({
        data: rows
    })
}

module.exports = {
    getAllTodoList
}