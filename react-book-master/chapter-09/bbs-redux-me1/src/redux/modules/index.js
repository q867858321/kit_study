import { combineReducers } from "redux";
import auth from './auth';
import posts from './posts';
import {getPostIds,getPostById} from './posts';
import {getUserById} from "./users";
const rootReducer = combineReducers({
    auth,
    posts
});

export default rootReducer;