import { Actions, ActionTypes } from '../actions/index';

interface DataState {
  items: string[];
  loading: boolean;
  error: any;
}

const getInitialState = () => {
  return {
    items: [],
    loading: false,
    error: null,
  };
};

const dataReducer = (state: DataState = getInitialState(), action: ActionTypes) => {
  switch (action.type) {
    case Actions.LOAD_DATA_BEGIN: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }

    case Actions.LOAD_DATA_SUCCESS: {
      return {
        ...state,
        loading: false,
        items: action.payload.data,
      };
    }

    case Actions.LOAD_DATA_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }

    default:
      return state;
  }
};

export default dataReducer;
