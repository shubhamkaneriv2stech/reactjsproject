const initialState = { time: { h: +0, m: +0, s: +0 }, seconds: +0 };

const reducer = (state = initialState, action) => {
  // console.log(state, action);
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        seconds: state.seconds + 60,
        time: action.secToTime(state.seconds + 60),
      };
    case "DECREMENT":
      return {
        ...state,
        seconds: state.seconds - 60,
        time: action.secToTime(state.seconds - 60),
      };

    case "START":
      return {
        ...state,
        seconds: state.seconds - 1,
        time: action.secToTime(state.seconds - 1),
      };
    case "STOP":
      return {
        ...state,
        seconds: 0,
        time: { h: 0, m: 0, s: 0 },
      };

    default:
      return state;
  }
};

export default reducer;
