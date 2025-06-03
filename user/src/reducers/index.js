import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { order } from './orders.reducer';
import { prescriptionUpload, addToCart } from './eCommerceProcess.reducer';
import { getCartDetails, removeFromCart } from './cartDetails.reducer';


const rootReducer = combineReducers({
  authentication, 
  order,
  authentication,
  prescriptionUpload, 
  addToCart,
  getCartDetails,
  removeFromCart
});

export default rootReducer;