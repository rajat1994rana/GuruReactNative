import {
  LOGIN,
  ONFIDO_SDK,
} from "../../Constants/Urls";
import { apiGet, apiPost, apiPostOnfido } from "../../Utils/requestHandler";
import types from "../types";
import store from "../store";

const { dispatch } = store;

export const saveUserData = (data) => {
  dispatch({
    type: types.LOGIN,
    payload: data,
  });
};

export const updateInternetConnection = (data) => {
  dispatch({
    type: types.NO_INTERNET,
    payload: data,
  });
};

export function onfidoSdkApiNew(data) {
  return apiPostOnfido(ONFIDO_SDK, data, onfido_check = true)
};

