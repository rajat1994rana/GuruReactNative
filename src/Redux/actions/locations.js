import types from "../types";
import store from "../store";

const { dispatch } = store;

export const saveLocationInfo = (data) =>{
    dispatch({
      type: types.LOCATION,
      payload: data,
    })
  }