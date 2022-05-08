//Aqui é o arquivo que combina todos os reducers

import { combineReducers } from "redux";
import { userReducer } from "./userReducer";

const reducers = combineReducers({
    allUsers: userReducer,
});

export default reducers;
