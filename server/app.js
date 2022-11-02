const express = require('express')


const todoListRouter = require('./routes/todoListRoute')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/todo', todoListRouter);

app.listen(5000, () => {
    console.log(`running on port 5000`);
})

module.exports = app;