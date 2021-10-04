import { combineReducers } from "redux";

const pageReducer = (page = 'home', action) => {
    if (action.type === 'SET_PAGE') {
        return action.payload;
    }
    return page;
}

export default combineReducers({
    page: pageReducer
})