const axios = require('axios').default
const getTodoList = () => {
    const uri = "http://localhost:5000/todo/";
    return axios.get(uri);
}

module.exports = {
    getTodoList
}