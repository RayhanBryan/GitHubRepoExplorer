import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import RepositoryList from './src/screens/RepositoryList';

const App = () => (
  <Provider store={store}>
    <RepositoryList />
  </Provider>
);

export default App;
