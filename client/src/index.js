import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SignUpContainer from './user/SignUpContainer'
import LogInContainer from './user/LogInContainer'
import LogOut from './user/LogOut'
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
      {console.log(store.getState())}
        <Route path="/" component={App} />
        <Route exact path="/signup" component={SignUpContainer} />
        <Route exact path="/login" component={LogInContainer} />
        <Route exact path="/logout" component={LogOut}/>
      </React.Fragment>
    </Router>
  </Provider>,
document.getElementById('root')
)
registerServiceWorker();
