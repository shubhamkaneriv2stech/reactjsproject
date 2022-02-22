import { SET_POSTSDATA } from "../types/Types";
import { LOGOUT } from "../types/Types";
export const postsDataInitialState = [];

const postsApiReducer = (state = postsDataInitialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case SET_POSTSDATA:
      return action.payload;
    case LOGOUT:
      return [];
    default:
      return state;
  }
};

export default postsApiReducer;
