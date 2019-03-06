import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reducers from 'reducers';
// import { composeWithDevTools } from "redux-devtools-extension";

// reformat / extract from props to make this compatible with testing
export default ({ children, initialState = {} }) => {
   const store = createStore(
      reducers, 
      initialState, 
      applyMiddleware(reduxPromise)
   );

   return (
      <Provider store={store}>
         {children}
      </Provider>
   )
}