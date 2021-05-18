import dataReducer from './data';

import { combineReducers } from 'redux';

const rootReducer = (combineReducers as any)({
  dataReducer,
});

export default rootReducer;
