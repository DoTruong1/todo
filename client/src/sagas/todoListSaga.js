import {call, cancel, join, take, put, takeEvery} from "redux-saga/effects"
// import { getTodoList } from "../actions/actions"
import {GETLIST} from "../actions/constant"
import todoListApi from "../API/todoListAPI"

const fetchAsync = async (func) => {
    const respone = await  func();

    return respone;
}
function* fetchTodoList() {
    try {
        const todoList = yield fetchAsync(todoListApi.getTodoList);
    } catch (e) {

    }
}

function* todoListSaga () {
    yield takeEvery(GETLIST, fetchTodoList);
}


export default todoListSaga;