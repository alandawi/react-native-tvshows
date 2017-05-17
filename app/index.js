import React, { Component } from 'react';
import { Root, Tabs } from './config/router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducers from './reducers';

class App extends Component {
  render() {
    return <Provider store={createStore(Reducers)}><Root /></Provider>;
    //return <Root />;
  }
}

export default App;