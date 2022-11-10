import {call, cancel, join, take, put, takeEvery, takeLatest, all, fork, select} from "redux-saga/effects"
import * as action from '../../actions/actions'
// import getTodos from '../selector'
import {Types} from "../../actions/constant"
import axios from "axios";

const getTodoList =  async () => {
    console.log('fetch async')
    const uri = "http://localhost:5000/todo/";
   return await axios.get(uri);
}


function* fetchTodoList() {
    try {

        const res = yield call(getTodoList);
        
        console.log("fetch todo")
        console.log(res)
        yield put(action.getTodoListSuccess(res.data))
    } catch (e) {
        console.warn(e.message)
    }
}

async function deleteTodoAsync(id) {
    const uri = `http://localhost:5000/todo/${id}`
    await axios.post(uri).then(() => console.log("post done"))
    console.log("post done")
}

async function addTodoAsync(detail) {
    console.warn(detail)
    const uri = "http://localhost:5000/todo/add";
    await axios.post(uri, 
        {
            details: detail
        } ,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )

} 

function* deleteTodo({id}) {
    try { 
        console.log("delete called ")
        const res = yield call(deleteTodoAsync, id)
        console.log("delete called 2")
        // console.log(res)
        yield put(action.remove(id));
    } catch(e) {
        console.error(e);
    }
}

function* addTodo({detail}) {
    try {
        yield call(addTodoAsync, detail)
        const res = yield call(getTodoList);
        console.log("ADDDDDD")
        console.log(res.data)
        yield put(action.getTodoListSuccess(res.data));
    } catch(e) {
        console.warn(e)
    }
}

export function* watchFetchTodo () {
    yield takeLatest(Types.GETLIST, fetchTodoList);
}

export function* deleteWatcher() {
    yield takeEvery(Types.DELETE_TODO_REQ, deleteTodo);
} 

export function* addWatcher() {
    yield takeEvery(Types.ADD_REQUEST, addTodo)
}
export default function* todoSagas() {
    yield all[watchFetchTodo(), deleteWatcher(), addWatcher()]
}

// export default function* rootSaga() {
//     yield all([
//       watchFetchTodo(),
//         deleteWatcher()
//     ])
//     // code after all-effect
//   }