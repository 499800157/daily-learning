import { createStore , applyMiddleware , compose} from "redux"
import { combineReducers } from "redux-immutable";
import thunk from "redux-chunk"

const reducer = combineReducers({})
const store = createStore(reducer,)


