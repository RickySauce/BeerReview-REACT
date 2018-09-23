import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SignUp from './user/SignUp'
import registerServiceWorker from './registerServiceWorker';
import setUser from './reducers/setUser'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const store = createStore(setUser, applyMiddleware(thunk))


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <Route path="/" component={App} />
        <Route exact path="/signup" component={SignUp} />
      </React.Fragment>
    </Router>
  </Provider>,
document.getElementById('root')
)
registerServiceWorker();
