import React, { Component } from 'react';
import { Root, Tabs } from './config/router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import RootReducer from './reducers';
import thunk from 'redux-thunk';

class App extends Component {
  render() {
    return <Provider store={createStore(RootReducer, {}, applyMiddleware(thunk))}><Root /></Provider>;
    //return <Provider store={createStore(RootReducer)}><Root /></Provider>;
  }
}

export default App;