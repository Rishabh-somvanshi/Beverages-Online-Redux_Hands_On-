import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from '../Login/action';
import profile from '../Login/reducer';

const rootReducer = combineReducers({
  user: profile
});

const configureStore = () => {
  return createStore(
    rootReducer,
    compose(applyMiddleware(thunk))
  );
};

export default configureStore;
