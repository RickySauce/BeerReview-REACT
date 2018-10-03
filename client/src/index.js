import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SignUpContainer from './user/SignUpContainer';
import LogInContainer from './user/LogInContainer';
import UserProfile from './user/UserProfile';
import BeerContainer from './beers/BeerContainer';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const store = createStore(rootReducer, applyMiddleware(thunk))


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <Route path="/" component={App}/>
        <Route exact path="/" render={() => <div className="BeerContainer"><h3>Welcome to Beer Review!</h3><h5>Please click one of the links above, to get started</h5></div>} />
        <Route exact path="/signup" component={SignUpContainer} />
        <Route exact path="/userprofile" component={UserProfile} />
        <Route exact path="/login" component={LogInContainer} />
        <Route path="/beers" render={routerProps => <BeerContainer {...routerProps}/>} />
      </React.Fragment>
    </Router>
  </Provider>,
document.getElementById('root')
)
registerServiceWorker();
