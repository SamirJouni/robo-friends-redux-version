import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { searchRobots, requestRobots } from "./reducers";
import 'tachyons';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

const logger = createLogger();
const rootReducer = combineReducers({
  searchRobots,
  requestRobots
});
const store = createStore (rootReducer,
  compose(applyMiddleware(thunkMiddleware, logger)));

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
