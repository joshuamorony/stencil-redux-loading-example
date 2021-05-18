import { LoadDataBeginAction, LoadDataSuccessAction, LoadDataFailureAction } from './data';

// Keep this type updated with each known action
export type ActionTypes = LoadDataBeginAction | LoadDataSuccessAction | LoadDataFailureAction;

export enum Actions {
  LOAD_DATA_BEGIN = 'LOAD_DATA_BEGIN',
  LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS',
  LOAD_DATA_FAILURE = 'LOAD_DATA_FAILURE',
}
