import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { order } from './orders.reducer';

const rootReducer = combineReducers({
  authentication, 
  order,
});

export default rootReducer;