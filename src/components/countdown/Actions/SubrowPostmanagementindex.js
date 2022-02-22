import { SET_SUBROWPOSTSDATA } from "../types/Types";
import axios from "axios";

//Declaration of APi URL
let apiUrl = `https://jsonplaceholder.typicode.com/posts`;
export const fetchSubPostsApiData = (row) => {
  console.log(row.original.id);
  return (dispatch) => {
    axios
      .get(`${apiUrl}/${row.original.id}/comments`)
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
  console.log(data, " sub row Data");
  if (data) {
    return {
      type: SET_SUBROWPOSTSDATA,
      payload: data,
    };
  }

  return {
    type: SET_SUBROWPOSTSDATA,
    payload: null,
  };
};
