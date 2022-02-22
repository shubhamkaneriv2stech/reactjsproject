import { combineReducers } from "redux";
import reducer from "./Reducers";
import weatherApiReducer from "./Reducer2";
import postsApiReducer from "./PostmanagementReducer";
import subRowspostsApiReducer from "./SubrowPostsManagement";
const rootReducer = combineReducers({
  reducer,
  weatherApiReducer,
  postsApiReducer,
  subRowspostsApiReducer,
});
export default rootReducer;
