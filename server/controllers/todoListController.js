// const database = require('../configs/database')
const { where } = require('sequelize');
const db = require('../models/sequelize')
const todo = require('../models/todo')
const getAllTodoList = async(req, res) => {
    // const [rows, fields] = await database.pool.execute('SELECT ID, jobName, completed, createdAt, deleteAt FROM todo.history;')
    const data = await todo.findAll({
        where: {
            status: 'active'
        },
        order: [
            ['id', 'DESC']
        ]
    });
    // console.log(rows);
    return res.json({
        data
    })
}

const deleteTodo = async(req, res) => {
    const todoid =  req.params.id;
    const todoItem = await todo.findOne({where: {id: todoid}});
    console.log(todoItem)
    todoItem.set({
        status: 'dead'
    })

    await todoItem.save();
    return res.json({message: "post done"})
}

const addTodo = async(req, res) => {
    const content = req.body['details'];
    console.log(`434242343342     ${content}`)
    if (typeof content !== 'undefined') {
        await todo.create({
            details: content
        }).then(result => {
            return res.json(result)
        })
    } else {

        return res.json({message: 'null'})
    }

    
}
// const insertTodoList = aysnc()
module.exports = {
    getAllTodoList, 
    deleteTodo, 
    addTodo
}