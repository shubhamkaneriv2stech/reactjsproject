import { SET_POSTSDATA } from "../types/Types";
import axios from "axios";

//Declaration of APi URL
let apiUrl = `https://jsonplaceholder.typicode.com/posts`;
export const fetchPostsApiData = () => {
  return (dispatch) => {
    axios
      .get(apiUrl)
      .then(function (response) {
        const data = response.data;
        dispatch(setApiData(data));
      })
      .catch(function (error) {
        //   console.log(error);
      });
  };
};

export const setApiData = (data) => {
  console.log(data);
  if (data) {
    return {
      type: SET_POSTSDATA,
      payload: data,
    };
  }

  return {
    type: SET_POSTSDATA,
    payload: null,
  };
};
