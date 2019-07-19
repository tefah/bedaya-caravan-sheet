import React from 'react';
import ReactDOM from 'react-dom';
import Index from './pages/index';
import * as serviceWorker from './serviceWorker';
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom'

import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

import checkup from 'store/checkup/reducer';
import checkup2 from 'store/checkup2/reducer';
import lab1 from 'store/lab/lab1reducer';
import lab2 from 'store/lab/lab2reducer';
import lab3 from 'store/lab/lab3reducer';
import lab4 from 'store/lab/lab4reducer';
import pharmacy from 'store/pharmacy/reducer';
import followup from 'store/followup/reducer';
import mainReducer from 'store/main/mainReducer'

import HomePage from 'pages/homePage/HomePage';
import Notfound from 'components/notFound/NotFound';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(combineReducers([CheckupReducer]),
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
const store = createStore(combineReducers({checkup, checkup2, lab1, lab2, lab3, lab4,
   pharmacy, followup, mainReducer,
  form: formReducer}), composeEnhancers(
   applyMiddleware(thunk)));

   const routing = (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route  path="/addnew" component={Index} />
          <Route component={Notfound} />
        </Switch>
      </Router>
     </Provider>
     )


ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
