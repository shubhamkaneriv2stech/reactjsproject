import { SET_WEATHERAPIDATA } from "../types/Types";
import { LOGOUT } from "../types/Types";
export const weatherDataInitialState = [];

const weatherApiReducer = (state = weatherDataInitialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case SET_WEATHERAPIDATA:
      return { ...state, ...action.payload };
    case LOGOUT:
      return [];
    default:
      return state;
  }
};

export default weatherApiReducer;
