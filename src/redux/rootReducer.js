import { combineReducers } from 'redux';
import { userInfoReducer } from './reducers/userInfo.reducer';

const rootReducer = combineReducers({
  userInfo: userInfoReducer,
});

export default rootReducer;
