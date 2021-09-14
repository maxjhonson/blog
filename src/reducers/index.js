import { combineReducers } from "redux";
import PostsReducers from "./PostsReducers";
import UserReducer from "./UserReducer";

export default combineReducers({ posts: PostsReducers, users: UserReducer });
