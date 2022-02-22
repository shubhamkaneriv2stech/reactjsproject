import { SET_SUBROWPOSTSDATA } from "../types/Types";
import { LOGOUT } from "../types/Types";
export const subRowspostsDataInitialState = [];

const subRowspostsApiReducer = (
  state = subRowspostsDataInitialState,
  action
) => {
  console.log(action.payload);
  switch (action.type) {
    case SET_SUBROWPOSTSDATA:
      return action.payload;
    case LOGOUT:
      return [];
    default:
      return state;
  }
};

export default subRowspostsApiReducer;
