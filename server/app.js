const express = require('express')


const todoListRouter = require('./routes/todoListRoute')
const db = require('./models/sequelize')
const todo = require('./models/todo')
const cor = require('cors')
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cor())

app.use('/todo', todoListRouter);

db.sync({alter: true});

const reset = async () => {
    const todos = await todo.findAll();
    for(i = 0 ; i < todos.length; i++) {
    // todo.create({details: `job${i}`})
    // console.log(i)

    todos[i].set({
        status: 'active'
    })
    await todos[i].save()
}


}

// reset()
app.listen(5000, () => {
    console.log(`running on port 5000`);
})


module.exports = app;