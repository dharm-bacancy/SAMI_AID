import React from 'react';
import {View,Text} from 'react-native';
import SemiNavigator from './src/navigation/SemiNavigator';
import {createStore,combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import illnessReducer from './src/store/reducers/illnesses';
import authReducer from './src/store/reducers/auth';

const rootReducer = combineReducers({
  illnesses: illnessReducer,
  auth: authReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const App: () => React$Node = () => {
  return(
    <Provider store={store}>
      <SemiNavigator/>
    </Provider>
  );
};

export default App;