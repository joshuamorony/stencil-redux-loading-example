import { Actions } from '../actions/index';

interface DataResponse {
  items: string[];
}

export function loadData() {
  return async dispatch => {
    // Trigger the LOAD_DATA_BEGIN action
    dispatch(loadDataBegin());

    try {
      let response = await fetch('/assets/test-data.json');
      handleErrors(response);

      let json: DataResponse = await response.json();

      // Trigger the LOAD_DATA_SUCCESS action
      dispatch(loadDataSuccess(json.items));
      return json.items;
    } catch (error) {
      // Trigger the LOAD_DATA_FAILURE action
      dispatch(loadDataFailure(error));
    }
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
}

// ACTIONS

export interface LoadDataBeginAction {
  type: Actions.LOAD_DATA_BEGIN;
}

export const loadDataBegin = () => async (dispatch, _getState) => {
  return dispatch({
    type: Actions.LOAD_DATA_BEGIN,
  });
};

export interface LoadDataSuccessAction {
  type: Actions.LOAD_DATA_SUCCESS;
  payload: any;
}

export const loadDataSuccess = data => async (dispatch, _getState) => {
  return dispatch({
    type: Actions.LOAD_DATA_SUCCESS,
    payload: { data },
  });
};

export interface LoadDataFailureAction {
  type: Actions.LOAD_DATA_FAILURE;
  payload: any;
}

export const loadDataFailure = error => async (dispatch, _getState) => {
  return dispatch({
    type: Actions.LOAD_DATA_FAILURE,
    payload: { error },
  });
};
